import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CadastroModel } from '../models/cadastro.model';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

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

  // Método para enviar os dados de login para o back-end
  login (usuario: LoginModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, usuario);
  }

  // Métodos para manipulação do token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  removeToken(): void {
    localStorage.removeItem('token');
  }
}
