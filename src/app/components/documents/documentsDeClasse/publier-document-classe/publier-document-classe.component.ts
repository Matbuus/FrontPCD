import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DocumentService} from "../../../../services/document.service";
import {Router} from "@angular/router";
import {Matiere} from "../../../../model/model.matiere";

@Component({
  selector: 'app-publier-document-administratif',
  templateUrl: './publier-document-classe.component.html',
  styleUrls: ['./publier-document-classe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublierDocumentClasseComponent implements OnInit {

  matiereSelectionneeAjout: Matiere;
  tabMatieres: any = [];
  constructor(public documentService: DocumentService, public router: Router) {
    this.documentService.getAllMatieres().subscribe(data => {console.log(data); this.tabMatieres = data as Matiere []; })

  }

  ngOnInit() {
    this.documentService.getAllMatieres().subscribe(data => {console.log(data); this.tabMatieres = data as Matiere []; })
  }

  test(){
    localStorage.setItem('idMatiereSelectionneeAjout', this.matiereSelectionneeAjout.idMatiere.toString());
    localStorage.setItem('nomMatiereSelectionneeAjout', this.matiereSelectionneeAjout.nom);
    //  console.log(this.matiereSelectionnee.idMatiere);
  }

}
