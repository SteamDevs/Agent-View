import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthComponent } from './core/auth/auth.component';
import { RegisterComponent } from './core/register/register.component';
import { HeaderComponent } from './core/shred/header/header.component';
import { AuthGuard } from './secure/auth.guard';
import { ControlUsersComponent } from './core/pages/control-users/control-users.component';
import { ControlMetricsComponent } from './core/pages/control-metrics/control-metrics.component';
import { ControlAlertsComponent } from './core/pages/control-alerts/control-alerts.component';

const ROUTES : Routes =[
    {
        path: 'home',
        component : HomeComponent,
        //canActivate : [ AuthGuard ],
        children : [
            {
                path: 'users',
                component: ControlUsersComponent
            },
            {
                path: 'metrics',
                component : ControlMetricsComponent
            },
            {
                path: 'alerts',
                component : ControlAlertsComponent
            }
        ]
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