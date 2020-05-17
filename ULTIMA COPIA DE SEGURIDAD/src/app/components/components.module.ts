import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AmbientesComponent } from './ambientes/ambientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AmbientesComponent,
    UsuariosComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
