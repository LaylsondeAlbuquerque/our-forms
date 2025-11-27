import { Routes } from "@angular/router";

export const dashboardRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard-list/dashboard-list').then(m => m.DashboardList),
    },
    {
        path: 'builder',
        loadComponent: () => import('./dashboard-builder/dashboard-builder').then(m => m.DashboardBuilder),
    },
    {
        path: 'view',
        loadComponent: () => import('./dashboard-view/dashboard-view').then(m => m.DashboardView),
    }
]