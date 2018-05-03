import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DocumentService} from "../../../../services/document.service";
import {Router} from "@angular/router";
import {Matiere} from "../../../../model/model.matiere";
import {Classe} from "../../../../model/model.classe";

@Component({
  selector: 'app-autoriser-document',
  templateUrl: './autoriser-document.component.html',
  styleUrls: ['./autoriser-document.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AutoriserDocumentComponent implements OnInit {
  idDocument : string = localStorage.getItem('idDoc');
  nomDocument : string = localStorage.getItem('nomDoc');
  idMatiere : string = localStorage.getItem('idMatiereSelectionnee');
  idClasse : string ;
  tabClasses : any = [];
  classeSelectionnee: Classe;
  constructor(public documentService: DocumentService, public router: Router) {
    console.log(this.idDocument);
    this.idMatiere = localStorage.getItem('idMatiereSelectionnee');
    this.idDocument = localStorage.getItem('idDoc');
    this.nomDocument  = localStorage.getItem('nomDoc');
    this.documentService.getClasses().subscribe(data => {console.log(data); this.tabClasses = data as Classe []; })
    this.idClasse = "1";
  }

  ngOnInit() {
    console.log(this.idDocument);
    this.idDocument = localStorage.getItem('idDoc');
    this.idMatiere = localStorage.getItem('idMatiereSelectionnee');
    this.nomDocument  = localStorage.getItem('nomDoc');
    this.documentService.getClasses().subscribe(data => {console.log(data); this.tabClasses = data as Classe []; })
    this.idClasse = "1";
  }

  test(){
    console.log(this.classeSelectionnee.nomClasse);
  }

  autorisation(){

  console.log(this.idMatiere);
localStorage.removeItem('idDoc');
    //localStorage.removeItem('nomDoc');
    //localStorage.removeItem('idMatiereSelectionnee');
    //localStorage.removeItem('matiereSelectionnee');
    //localStorage.removeItem('idMatiereSelectionneeAjout');
    //localStorage.removeItem('nomMatiereSelectionnee');
    //localStorage.removeItem('nomMatiereSelectionneeAjout');

    this.documentService.donnerAutorisation(this.idMatiere, this.idClasse, this.idDocument);
    //this.router.navigate(['/mesmatieres']);
  }

}
