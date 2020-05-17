import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { User } from  'src/app/models/ambientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Variables
  notFound = false;
  user: User;
  
  constructor( private userService: ApisService) { }

  ngOnInit(): void {
   
  }
  
  //Consumo del get de la api del servicio
  getUser(userId: string){
    this.notFound = false;
    this.user = null;

    this.userService.getUser(userId).subscribe((userFromTheAPI : User) =>{
      this.user = userFromTheAPI;
    }, (err: any) => {
      console.error(err);
      this.notFound = true;
    });
  }

}
