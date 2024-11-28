import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    },

    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
    },

    {
        path: 'secured-feat',
        loadComponent: () => import('./pages/secured-feat/secured-feat.component').then(c => c.SecuredFeatComponent),
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(c => c.authRoutes),
    },
];
