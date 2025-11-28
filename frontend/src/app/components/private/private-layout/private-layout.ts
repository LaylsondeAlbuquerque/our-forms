import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet,  } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  imports: [
    FormsModule,
    RouterLink,
    RouterLinkWithHref,
    RouterLinkActive, RouterOutlet],
  templateUrl: './private-layout.html',
  styleUrl: './private-layout.css',
})
export class PrivateLayout {

  // Injects
  authService = inject(AuthService);
  router = inject(Router);

  // ---- USER MENU DROPDOWN ----
  // controle do menu
  isMenuOpen = false;

  // mock do usuário
  user = this.authService.getUser() || { nome: 'Usuário', email: '' };

  // Ativar o menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Fechar o menu
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Sair da rota privada
  logout() {
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }

  
}
