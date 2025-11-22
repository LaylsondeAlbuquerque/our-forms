// --- 1. Importações  ---
import express from 'express';
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import jwt from 'jsonwebtoken';

// --- 2. Configurações Iniciais ---
const app = express();
const port = 3000;

// --- 3. Middlewares  ---
app.use(
    cors({
        origin: 'http://localhost:4200'
    })
);
app.use(express.json());

// --- 4. Conexão com o Banco de Dados (MySQL) ---
// O 'pool' gerencia várias conexões para ser mais rápido
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'meus_formularios_db' // <-- CORRIGIDO
});

// --- 5. O ponto de entrada do Cadastro ---
app.post('/api/cadastro', async (req, res) => {
    try {
        // 5.1 Pegar os dados que o Angular enviou no 'body'
        const {
            primeiroNome,
            sobrenome,
            email,
            telefone,
            dataNascimento,
            senha
        } = req.body;

        // 5.1.1 Validação manual de campos obrigatórios
        if (!primeiroNome || !sobrenome || !email || !telefone || !dataNascimento || !senha) {
            return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
        }

        // 5.1.2 Validação simples do formato de email
        if (!email.includes('@') || !email.includes('.')) {
            return res.status(400).json({ message: 'Formato de E-mail inválido.'});
        }

        //  5.1.3 Validação do tamanho da senha
        if (senha.length < 12) {
            return res.status(400).json({ message: 'Senha deve ter no mínimo 12 caracteres.'});
        }

        // 5.1.4 Validação de data no futuro
        const dataNascimentoObjetoDate = new Date(dataNascimento);
        const dataAtual = new Date();

        if (dataNascimentoObjetoDate > dataAtual) {
            return res.status(400).json({ message: 'A data de nascimento não pode ser no futuro.' });
        }
        
        // 5.2 Criptografando a senha
        const senhaHash = await bcrypt.hash(senha, 10);

        // 5.3 Comando SQL para inserir os dados na tabela
        const sql = `
            INSERT INTO users (
                primeiroNome, sobrenome, email, telefone, dataNascimento, senha_hash
            ) VALUES (?, ?, ?, ?, ?, ?)
        `;

        // 5.4 Executar o comando no banco de dados
        await pool.query(sql, [
            primeiroNome,
            sobrenome,
            email,
            telefone,
            dataNascimento,
            senhaHash
        ]);

        // 5.5 Se deu tudo certo, mandar uma resposta de Sucesso (201 = Criado)
        res.status(201).json({message: 'Usuário cadastrado com sucesso!'});

    } catch (error) {
        // 5.6 Mensagem de erro para caso algo dê errado
        console.error('Erro ao cadastrar usuário: ', error);

        // 5.7 O erro 'ER_DUP_ENTRY' é o código do MySQL para "email duplicado"
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: 'Este e-mail já está cadastrado.' });
        }

        res.status(500).json({ message: 'Erro interno no servidor.' });
    }
});

// --- 6. O ponto de entrada do Login ---
app.post('/api/login', async (req, res) => {
    try {
        // 6.1 Pegar os dados que o Angular enviou no 'body'
        const { email, senha } = req.body;

        // 6.1.1 Validação: checa se mandou tudo
        if (!email || !senha) {
            return res.status(400).json({ message: ' E-mail e senha são obrigatórios. '});
        }

        // 6.2 Validação: verifica se o usuário já errou a senha 5 vezes naquele dia, e caso sim, bloqueia novas tentativas para aquele email
        // 6.2.1Código SQL que procura se o email no banco de dados login_attempts
        const sqlTentativas = `SELECT * FROM login_attempts WHERE email = ?`;
        // 6.2.2Executa o SQL e devolve a lista daquela linha caso o email seja encontrado
        const [tentativasRows] = await pool.query(sqlTentativas, [email]);

        let tentativasInfo = null

        // 6.2.3 Verificação: se o query devolvel alguma lista
        if (tentativasRows.length > 0) {
            tentativasInfo = tentativasRows[0];

            // 6.2.4 Verificação: se a última tentativa foi NA DATA ATUAL DO USUÁRIO
            // 6.2.4.1 Const da última data de tentativa mal sucedida daquele email
            const ultimaTentativa = new Date(tentativasInfo.ultima_tentativa);
            // 6.2.4.2 Const da data atual
            const hoje = new Date();

            // 6.2.4.2 Const que devolve verdadeiro ou falso a depender de se é o mesmo dia, mês ou ano.
            const mesmoDia = 
                ultimaTentativa.getDate() === hoje.getDate() &&
                ultimaTentativa.getMonth() === hoje.getMonth() &&
                ultimaTentativa.getFullYear() === hoje.getFullYear();

            // 6.2.4.3 Se for a mesma data
            if (mesmoDia) {
                // 6.2.4.3.1 Verificação: se já foram 5 tentativas nesse dia 
                // (se não for o mesmo dia, as tentativas são zeradas, 
                // então só chega aqui se as tentativas forem no mesmo dia)
                if (tentativasInfo.tentativas >= 5) {
                    return res.status(429).json({ message: 'Muitas tentativas falhas hoje. Tente novamente amanhã.' });
                }
            } else {
                // 6.2.4.3.2 Se não for o mesmo dia, vamos resetar o contador local do tentativasInfo.tentativas.
                // Se depois daqui estiver certa, a linha é apagada;
                // Se depois daqui estiver errada, já vamos atualizar para tentativasInfor.tentativas + 1 (0 +1=1);
                // Então seria redundante mecher no Banco de dados agora.
                tentativasInfo.tentativas = 0;
            }
        }

        // 6.2.5 Função auxiliar para registrar a falha do usuário
        const registrarFalha = async () => {
            // Validação: verifica se já houves tentativas antes
            if (tentativasInfo) {
                const novoContador = tentativasInfo.tentativas +1;
                await pool.query('UPDATE login_attempts SET tentativas = ?, ultima_tentativa = NOW() WHERE email = ?', [novoContador, email]);
            } else {
                // Caso não haja registro de tentativas, vamos criar uma nova linha
                await pool.query(`INSERT INTO login_attempts (email, tentativas, ultima_tentativa) VALUES (?, 1, NOW())`, [email]);
            }
        };
    
        // 6.3 Buscar o email do usuário no BD (banco de dados)
        const sql = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await pool.query(sql, [email]);

        // 6.3.1 Validação: se o email existe no BD
        if (rows.length == 0) {
            return res.status(401).json({ message: 'O E-mail ou senha incorretos.' });
        }

        // 6.3.2 Validação: se a senha está correta
        const usuario = rows[0];
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
        
        // 6.3.2.1 Se a senha estiver ERRADA 
        if (!senhaCorreta) {
            await registrarFalha();
            return res.status(401).json({ message: 'O E-mail ou senha incorretos.' });
        }

        // 6.3.2.2 Se a senha estiver CERTA
        if (tentativasInfo) {
            await pool.query(`DELETE FROM login_attempts WHERE email = ?`, [email]);
        } 

        // 6.4 Gerando o Token (não o do senhor dos aneis)
        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            'CHAVE_SEGURA_E_SECRETA',
            { expiresIn: '24h' }
        );

        res.status(200).json({ 
            message: 'Login realizado com sucesso',
            token: token,
            usuario: {
                id:usuario.id,
                nome: usuario.primeiroNome,
                email: usuario.email
            } 
         });

    } catch (error) {
                console.error('Erro no Login: ', error);
                res.status(500).json({ message: 'Erro interno nos servidor' });
    }
});


// --- 7. Iniciar o Servidor ---
app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`);
});