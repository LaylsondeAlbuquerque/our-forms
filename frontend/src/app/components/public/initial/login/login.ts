import { Component, inject } from '@angular/core';
import { LoginModel } from '../../../../models/login.model';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login', 
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login {
  // Dados de login
  novoLogin: LoginModel = {
    email: '',
    senha: '',
  }

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

    // Executa o Observable: Envia o Post para a API e gerencia os callbacks de resposta
    this.authService.login(this.novoLogin).subscribe({

      // Se der certo:
      next: (resposta) => {
        console.log('Sucesso!', resposta);
        this.authService.setToken(resposta.token);
        alert('Bem-vindo de volta!');
      },

      // Se der errado:
      error: (erro) => {
        console.error('Erro no login: ', erro);
        alert(erro.error?.message || 'Ocorreu um erro ao tentar logar.');
      }
    });


  }

}
