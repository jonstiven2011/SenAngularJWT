import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: Usuarios[];

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.getAllUsuarios().subscribe(
      next => this.users = next
    )
  }

}
