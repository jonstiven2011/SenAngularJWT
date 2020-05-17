import { Component } from '@angular/core';
import { SecurityService } from './services/security.service';
import { UserAuth } from './models/user-auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SenAngular';
   
  securityObject: UserAuth = null;

  constructor(private service: SecurityService) {
    this.securityObject = this.service.securityObject;
  }

  logout() {
    this.service.logout();
  }

}
