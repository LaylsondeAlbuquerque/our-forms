import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CadastroModel } from '../models/cadastro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';

  constructor () {}

  // Método para enviar os dados de cadastro para o back-end
  cadastrar (usuario: CadastroModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro`, usuario);
  }
}
