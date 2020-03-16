import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvisCitoyen } from '@app/_models/AvisCitoyen';
import { DashService } from '@app/_services/_dashService/dash.service';
import { Titre }  from '@app/_models/titre';
import { Wilaya } from '@app/_models/wilaya';
 
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {

  avisCitoyens: Observable<AvisCitoyen[]>;
  listWilaya: Wilaya[];
  listSecteur:Titre[];

  avis = new Array();
  /*ListAvis=Array<AvisCitoyen>;*/
  constructor(private dashSevice: DashService,private router:Router) { }

  ngOnInit() {
    this.reloadDataWilaya();
    //console.log(this.listWilaya.length);
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
     this.dashSevice.getWilayaVotants().subscribe(data=>this.listWilaya=data);
   }
   loadWilayaSecteur(codew:string) {
    /// this.dashSevice.getwilayasecteur(wilaya).subscribe(data => this.listSecteur = data);
            this.router.navigate(['secteurs',codew]);
   }
/*loadWilayaSecteur ()
{
  this.dashSevice.getwilayasecteur().subscribe(data=>this.listSecteur=data);
}*/

}
