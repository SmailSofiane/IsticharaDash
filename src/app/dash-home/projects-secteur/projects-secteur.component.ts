import { Component, OnInit } from '@angular/core';
import { DashService } from '@app/_services/_dashService/dash.service';
import { Router, ActivatedRoute } from '@angular/router';
 
import { Wilaya } from '@app/_models/wilaya';
import { Titre } from '@app/_models/titre';
import { Projectid } from '@app/_models/projectid';
import { Project } from '@app/_models/project';

@Component({
  selector: 'app-projects-secteur',
  templateUrl: './projects-secteur.component.html',
  styleUrls: ['./projects-secteur.component.css']
})

export class ProjectsSecteurComponent implements OnInit {

private listProjets:Array< Project>;
private wilaya:Wilaya;
private titre:Titre;
private codes:string;
private projectid:Projectid;
  



  constructor(private dashSevice: DashService,private router:Router,private route:ActivatedRoute) { 
   // this.listProjets=[];
     
  }

  ngOnInit() {
  ///  this.listProjets=[];
       
    this.codes=this.route.snapshot.params['codes'];
    this.dashSevice.getprojectParSecteur(this.codes)    
      /*.subscribe(data=>{
      data.forEach(function(value){
        let p: Project ;
         p=new Project(value['projetId']['codeArticl'],value['projetId']['codeprojet']
        ,value['libprojet']
        ,value['nbVotants']);
     this.listProjets.push(p)  
       /*console.log(value['projetId']['codeArticl']+","+value['projetId']['codeprojet']
      +","+value['libprojet']
      +","+value['nbVotants'])
      }); 
    //    this.projectid=data["projetId"];
     //   console.log("-------------"+JSON.stringify(data['libprojet']));
      //  console.log("-------------"+data[0]['projetId']['codeArticl']);
      }
    ); */ 
    .subscribe(data => this.listProjets = data);
  }
  

}
