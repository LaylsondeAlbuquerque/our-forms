import { Component } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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

  novoLogin: LoginModel = {
    email: '',
    senha: '',
  }

  onSubmit() {
    console.log('Tentativa de login: ', this.novoLogin);
  }

}
