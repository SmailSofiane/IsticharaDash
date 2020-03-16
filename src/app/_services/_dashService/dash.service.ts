import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AvisCitoyen } from '@app/_models/AvisCitoyen';
import { Wilaya } from '@app/_models/wilaya';
import { Poject } from '@app/_models/poject';
import { Project } from '@app/_models/project';
 

@Injectable({
  providedIn: 'root'
})
export class DashService {

  private CitoyensUrl = 'http://192.168.1.111:8080/dash/avis';
   private wilayaVotantsUrl='http://192.168.1.111:8080/dash/wilayaavis';
   private wilayasecteurUrl='http://192.168.1.111:8080/dash/listsecteur?codew='
   private projectparsecteurUrl='http://192.168.1.111:8080/dash/listprojetparsect?codes=';
  
  constructor(private _http: HttpClient) { }
  getAvisCitoyen(): Observable<any> {
    return this._http.get(`${this.CitoyensUrl}`);
  }
 
  getWilayaVotants():Observable<any[]>{
    return this._http.get<any[]> (`${this.wilayaVotantsUrl}`);
   }

   getwilayasecteur(wilaya:Wilaya):Observable<any[]>{
     return this._http.get<any[]> (`${this.wilayasecteurUrl+'01'}`);
   }
   getprojectParSecteur(codes:string):Observable<Project[]>
   {
    return this._http.get<Project[]>(`${this.projectparsecteurUrl+'7'}`);
     
   }

}
