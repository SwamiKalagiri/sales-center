import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    if(this.isAuthenticated){
      this.router.navigate(['/item-list']);
    } else {
      this.oktaAuth.loginRedirect();
    }
  }
}
