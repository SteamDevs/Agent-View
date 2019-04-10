import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AuthComponent } from './core/auth/auth.component';
import { HomeComponent } from './core/home/home.component';

import { APP_ROUTING } from './app.routes';

import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { RegisterComponent } from './core/register/register.component';
import { HeaderComponent } from './core/shred/header/header.component';
import { FooterComponent } from './core/shred/footer/footer.component';
import { ControlUsersComponent } from './core/pages/control-users/control-users.component';
import { ControlMetricsComponent } from './core/pages/control-metrics/control-metrics.component';
import { ControlAlertsComponent } from './core/pages/control-alerts/control-alerts.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ControlUsersComponent,
    ControlMetricsComponent,
    ControlAlertsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
