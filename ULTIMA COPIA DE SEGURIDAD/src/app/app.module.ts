import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { MostrarComponent } from './mostrar/mostrar.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AmbientesComponent } from './components/ambientes/ambientes.component';
import { HttpInterceptorModule } from './services/http-interceptor.module';
//import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    MostrarComponent, 
    LoginComponent,
    AmbientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HttpInterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
