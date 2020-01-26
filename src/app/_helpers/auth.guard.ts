import {Injectable} from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'
//import {AuthenticationService} from '@app/_services/authentication.service';
import { HttpAuthService } from '@app/_services';
@Injectable ({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
      private router:Router,
      private authentificationService: HttpAuthService
  ){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
      const currentUser=this.authentificationService.curentUserValue;
     
       if(currentUser) {return true;}
       this.router.navigate(['/login'], 
       { queryParams: { returnUrl: state.url } });
    return false;
  }
}
