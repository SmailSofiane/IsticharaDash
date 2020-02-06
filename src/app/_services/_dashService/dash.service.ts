import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvisCitoyen } from '@app/_models/AvisCitoyen';
import { Wilaya } from '@app/_models/wilaya';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  private CitoyensUrl = 'http://192.168.1.111:8080/dash/avis';
   private wilayaVotantsUrl='http://192.168.1.111:8080/dash/wilayaavis';
  w:Observable<Wilaya[]>;
  constructor(private _http: HttpClient) { }

  getAvisCitoyen(): Observable<any> {
    return this._http.get(`${this.CitoyensUrl}`);
  }

  getWilayaVotants():Observable<Wilaya[]>{
     this.w=this._http.get<Wilaya[]>(`${this.wilayaVotantsUrl}`).pipe(
    map(data=>data.map(data=>new Wilaya().deserialize(data)))
    );
    this.w.subscribe(res => console.log(res[0]));
    return this.w;

  }
}
