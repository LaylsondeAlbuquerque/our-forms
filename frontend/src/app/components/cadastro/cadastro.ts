import { Component } from '@angular/core';
import { CadastroModel } from '../../models/cadastro.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export default class Cadastro {

  today: string;

  novoCadastro: CadastroModel = {
    id: 0,
    primeiroNome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    dataNascimento: new Date(),
    senha: ''
  };

  constructor() {
    this.today = new Date().toISOString().split('T')[0];
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log("Formulário inválido, não enviado.");
      form.control.markAllAsTouched();
      return;
    }
    console.log(this.novoCadastro);
  }

}
