import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { User, Ambientes } from  'src/app/models/ambientes';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  //Variables
  // notFound = false;
  // user: User;
  users: User[];
  userSena: Ambientes[];

  constructor(private userService: ApisService) { }

  ngOnInit(): void {
    this.userService.getUsersWithHeaders().subscribe((response: any) => {
      console.log(response);
      this.users = response.body
    }, error => console.error(error));
    // Ambientes
    this.userService.getUsersSena().subscribe((response: any) => {
      console.log(response);
      this.userSena = response.body
    }, error => console.error(error));
  }

  // //Consumo del get de la api del servicio
  // getUser(userId: string){
  //   this.notFound = false;
  //   this.user = null;

  //   this.userService.getUser(userId).subscribe((userFromTheAPI : User) =>{
  //     this.user = userFromTheAPI;
  //   }, (err: any) => {
  //     console.error(err);
  //     this.notFound = true;
  //   });
  // }

}
