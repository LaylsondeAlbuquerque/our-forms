import { Routes } from '@angular/router';
import { guestGuard } from './guards/guest-guard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

    {

        path: '',
        loadComponent: () => import('./components/public/initial/public-layout/public-layout'),
        canActivate: [guestGuard],
        children: [
            
            {
                path: '',
                pathMatch: 'full', 
                loadComponent: () => import('./components/public/initial/home/home'),
            },
            {
                path: 'cadastro', 
                loadComponent: () =>  import('./components/public/initial/cadastro/cadastro' ),
            }, 
            {
                path: 'login', 
                loadComponent: () => import('./components/public/initial/login/login'),
            },
            
            
        ]

    },

    {
        path: '',
        loadComponent: () => import('./components/private/private-layout/private-layout').then(m => m.PrivateLayout),
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboards',
                loadChildren: () => import('./components/private/dashboard/dashboard.routes').then(m => m.dashboardRoutes),
            },
            {
                path: 'forms',
                loadChildren: () => import('./components/private/forms/form.routes').then(m => m.formRoutes),
            },
            {
                path: 'user',
                loadComponent: () => import('./components/private/profile/profile').then(m => m.Profile),
            },
        ],
    },

];
