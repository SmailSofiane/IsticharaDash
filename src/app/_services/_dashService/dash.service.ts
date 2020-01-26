import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvisCitoyen } from '@app/_models/AvisCitoyen';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  private CitoyensUrl = 'http://localhost:8080/dash/avis';
  constructor(private _http: HttpClient) { }

  getAvisCitoyen(): Observable<any> {
    return this._http.get(`${this.CitoyensUrl}`);
  }
}
