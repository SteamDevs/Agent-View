import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthComponent } from './core/auth/auth.component';
import { RegisterComponent } from './core/register/register.component';
import { HeaderComponent } from './core/shred/header/header.component';


const ROUTES : Routes =[
    {
        path: 'home',
        component : HomeComponent
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    } 
]

export const APP_ROUTING = RouterModule.forRoot( ROUTES, { useHash : true })