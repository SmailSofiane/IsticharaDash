import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Injectable} from '@angular/core'
import {AuthenticationService} from '@app/_services/authentication.service'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpAuthService } from '@app/_services';

@Injectable ()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(        
        private authenticationService:HttpAuthService
    )
    {}
    intercept(request:HttpRequest<any>,next :HttpHandler):Observable<HttpEvent<any>>  
    {
    return next.handle(request).pipe(catchError(err=>{
        if(err.status===401)
        {
            this.authenticationService.logOut();
            location.reload(true);
        }
        const error =err.error.message || err.statusText;
        return throwError(error);
    }));
    
    }

}
