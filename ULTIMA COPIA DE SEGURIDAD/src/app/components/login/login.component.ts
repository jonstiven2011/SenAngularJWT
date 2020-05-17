import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserAuth } from 'src/app/models/user-auth';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  securityObject: UserAuth = null;
  returnUrl = '/ambientes';
  errorMessage = '';

  constructor(
    private service: SecurityService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    this.errorMessage = '';
    this.service.login(this.user).subscribe(
      resp => {
        this.securityObject = resp;
        this.router.navigateByUrl(this.returnUrl);
      },
      error => this.errorMessage = error
    )
  }

}
