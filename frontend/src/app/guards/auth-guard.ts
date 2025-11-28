import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);

  // Tenta pegar o token
  const token = authService.getToken();

  // Se conseguir, retorna true
  if (token) {
    return true;
  } else {
    // Se não, redireciona e retorna false
    router.navigate(['/login']);
    return false;
  }
};
