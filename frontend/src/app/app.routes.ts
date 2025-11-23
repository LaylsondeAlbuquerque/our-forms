import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', pathMatch: 'full', loadComponent: () => import('./components/public/initial/home/home')},
    {path: 'cadastro', loadComponent: () =>  import('./components/public/initial/cadastro/cadastro' )}, 
    {path: 'login', loadComponent: () => import('./components/public/initial/login/login')},
];
