import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', pathMatch: 'full', loadComponent: () => import('./components/home/home')},
    {path: 'cadastro', loadComponent: () =>  import('./components/cadastro/cadastro' )}, 
    {path: 'login', loadComponent: () => import('./components/login/login')},
];
