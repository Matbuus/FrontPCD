import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {DocumentService} from "../../../../services/document.service";
import {Router} from "@angular/router";
import {Matiere} from "../../../../model/model.matiere";
import {Document} from "../../../../model/model.document";
import {DocumentsParMatiereComponent} from "../documents-par-matiere/documents-par-matiere.component";
import {Utilisateur} from "../../../../model/model.utilisateur";

@Component({
  selector: 'app-matieres-list',
  templateUrl: './matieres-list.component.html',
  styleUrls: ['./matieres-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MatieresListComponent implements OnInit {
  matiereSelectionnee: Matiere;
  tabMatieres: any = [];
  constructor(public documentService: DocumentService, public router: Router) {
    this.documentService.getMatieresProfs().subscribe(data => {console.log(data); this.tabMatieres = data as Matiere []; })

  }

  ngOnInit() {
    this.documentService.getMatieresProfs().subscribe(data => {console.log(data); this.tabMatieres = data as Matiere []; })
  }

  test(){
   localStorage.setItem('idMatiereSelectionnee', this.matiereSelectionnee.idMatiere.toString());
    localStorage.setItem('nomMatiereSelectionnee', this.matiereSelectionnee.nom);
 //  console.log(this.matiereSelectionnee.idMatiere);
  }
}
