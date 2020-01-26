import { Component } from '@angular/core';
import { User } from './_models';
import { Router } from '@angular/router';
import { HttpAuthService } from './_services';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser:User;
  constructor(
    private router:Router,
    private authenticationService:HttpAuthService
  )
  {
    this.authenticationService.currentUser.subscribe(
      x=>this.currentUser=x
    );
  }
  logout(){
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }


}
