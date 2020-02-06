import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvisCitoyen } from '@app/_models/AvisCitoyen';
import { DashService } from '@app/_services/_dashService/dash.service';
import { map } from 'rxjs/operators';
import { Wilaya } from '@app/_models/wilaya';
import { log } from 'util';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {

  avisCitoyens: Observable<AvisCitoyen[]>;
  listWilaya: Wilaya[];

  avis = new Array();
  /*ListAvis=Array<AvisCitoyen>;*/
  constructor(private dashSevice: DashService) { }

  ngOnInit() {
    this.reloadDataWilaya();
  }
  reloadDataCitzen() {
    this.dashSevice.getAvisCitoyen().subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          let aviscitoyen = new AvisCitoyen();
          aviscitoyen.$num = res[i]["aviscitoyenId"].num;
          aviscitoyen.$nin = res[i]["aviscitoyenId"].nin;
          aviscitoyen.$codeCR = res[i].codeCR;
          aviscitoyen.$remarque = res[i].remarque;
          aviscitoyen.$adress = res[i].adress;
          //  aviscitoyen.$libprojet=res[i]["projet"]["libprojet"];
          //aviscitoyen.$codeTitre=res[i]["projet"].Titre.libRub;
          this.avis[i] = (aviscitoyen);
        }
        console.log(JSON.stringify(this.avis));
      }
    );
  }
  reloadDataWilaya() {
    this.dashSevice.getWilayaVotants().subscribe(listWilaya=>this.listWilaya=listWilaya);
   console.log(this.listWilaya);
  }
}
