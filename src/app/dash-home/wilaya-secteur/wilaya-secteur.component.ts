import { Component, OnInit } from '@angular/core';
import { Titre } from '@app/_models/titre';
import { DashService } from '@app/_services/_dashService/dash.service';
import { Wilaya } from '@app/_models/wilaya';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wilaya-secteur',
  templateUrl: './wilaya-secteur.component.html',
  styleUrls: ['./wilaya-secteur.component.css']
})
export class WilayaSecteurComponent implements OnInit {

  listSecteur: Titre[];
   wilaya:Wilaya;
   codew:string;
  avis = new Array();
  /*ListAvis=Array<AvisCitoyen>;*/
  constructor(private dashSevice: DashService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.codew=this.route.snapshot.params['codew'];
    this.dashSevice.getwilayasecteur(this.wilaya).subscribe(data => this.listSecteur = data);
  }
  loadProjectSecteur(codes:string) {
    /// this.dashSevice.getwilayasecteur(wilaya).subscribe(data => this.listSecteur = data);
            this.router.navigate(['projects',codes]);
   }
  loadWilayaSecteur(wilaya:Wilaya) {
   /// this.dashSevice.getwilayasecteur(wilaya).subscribe(data => this.listSecteur = data);
     //      this.router.navigate(['secteurs',wilaya]);
  }

}
