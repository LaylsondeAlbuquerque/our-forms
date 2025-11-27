import { Routes } from "@angular/router";

export const formRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./form-list/form-list').then(m => m.FormList),
    },
    {
        path: 'create',
        loadComponent: () => import('./form-create/form-create').then(m => m.FormCreate),
    },
    {
        path: 'results',
        loadComponent: () => import('./form-results/form-results').then(m => m.FormResults),
    },
]