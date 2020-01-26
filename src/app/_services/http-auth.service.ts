import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@app/_models'
@Injectable({ providedIn: 'root' })
export class HttpAuthService {

    //private baseAuthenticationUrl = 'http://localhost:8080/authenticate'
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    constructor(private _http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

    }
    get curentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public Sendauthenticate(username: string, password: string) {
      
        return this._http.post<any>(`${environment.isticharaRestAuth}/authenticate`, { username, password })
            .pipe(map(
                userData => {
                    localStorage.setItem('currentUser',JSON.stringify(userData));
                    this.currentUserSubject.next(userData) ;
                   /* sessionStorage.setItem('username', username);
                    let tokenStr = 'Bearer ' + userData.token;
                    sessionStorage.setItem('token', tokenStr);
                    console.log(username + "------" + sessionStorage.getItem(username));*/
                    console.log(userData);
                    return userData;
                }
            ));
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem('currentUser');
        return !(user === null)
    }
    logOut() {
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
