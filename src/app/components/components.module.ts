import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AmbientesComponent } from './ambientes/ambientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    LoginComponent,
    AmbientesComponent,
    UsuariosComponent
  ],
  exports:[
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
