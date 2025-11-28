import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const guestGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  // Tenta pegar o token
  const token = authService.getToken();

  // Se conseguir redireciona e retorna false
  if (token) {
    router.navigate(['/forms']);
    return false;
  } else {
    // Se não conseguir retorna true
    return true;
  }
};
