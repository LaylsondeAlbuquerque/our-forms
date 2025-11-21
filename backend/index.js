// --- 1. Importações  ---
import express from 'express';
import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import cors from 'cors';

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

// --- 6. Iniciar o Servidor ---
app.listen(port, () => {
    console.log(`Servidor backend rodando em http://localhost:${port}`);
});