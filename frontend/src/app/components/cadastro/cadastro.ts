import { Component, inject } from '@angular/core';
import { CadastroModel } from '../../models/cadastro.model';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export default class Cadastro {

  // Data de hoje
  today: string = new Date().toISOString().split('T')[0];

  // Dados do novo cadastro
  novoCadastro: CadastroModel = {
    id: 0,
    primeiroNome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    dataNascimento: this.today,
    senha: ''
  };


  // Injects
  private authService = inject(AuthService);
  private router = inject(Router);

  // Método para submeter o formulário
  onSubmit(form: NgForm) {
    
    // Se o formulário tiver algum erro
    if (form.invalid) {
      console.log("Formulário inválido, não enviado.");
      form.control.markAllAsTouched();
      return;
    }

    // Executa o Observable: Envia POST para a API e gerencia os callbacks de resposta
    this.authService.cadastrar(this.novoCadastro).subscribe({

      // Se der certo
      next: (resposta) => {
        console.log('Sucesso!', resposta);
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate(['/login']);
      },

      // Se der errado
      error: (erro) => {
        console.error('Erro no cadastro: ', erro);
        alert(`Erro ao cadastrar: ${erro.error.message}`);
      }
    });
  }

}
