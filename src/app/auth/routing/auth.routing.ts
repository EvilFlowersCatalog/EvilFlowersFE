import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { LoginGuard } from './login.guard';

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        canActivate: [LoginGuard],
        component: LoginComponent,
    },
];
