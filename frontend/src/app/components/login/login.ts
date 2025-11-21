import { Component } from '@angular/core';
import { LoginModel } from '../../models/login.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login', 
  standalone: true,
  imports: [FormsModule],
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
