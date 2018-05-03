import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import {Matiere} from "../../../../model/model.matiere";
import {DocumentService} from "../../../../services/document.service";
import {Document} from "../../../../model/model.document";
import {Router} from "@angular/router";

@Component({
  selector: 'app-documents-par-matiere',
  templateUrl: './documents-par-matiere.component.html',
  styleUrls: ['./documents-par-matiere.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentsParMatiereComponent implements OnInit {

  nomMatiere : string = localStorage.getItem('nomMatiereSelectionnee');
  idMatiere: string = localStorage.getItem('idMatiereSelectionnee');
  tabDocuments: any = [];
  documentSelectionne : Document;
  idDocument : string;
  nomDocument : string;
  constructor(public documentService: DocumentService, public router: Router) {
    if( localStorage.getItem('idMatiereSelectionnee'))
    this.documentService.getDocumentsParMatiere(this.idMatiere).subscribe(data => {console.log(data); this.tabDocuments = data as Document []; })
    else this.router.navigate(['/mesmatieres']);
  }

  ngOnInit() {
    if( localStorage.getItem('idMatiereSelectionnee'))
      this.documentService.getDocumentsParMatiere(this.idMatiere).subscribe(data => {console.log(data); this.tabDocuments = data as Document []; })
    else
      this.router.navigate(['/mesmatieres']);
  }

  autoriser(){
    localStorage.setItem('idDoc',this.idDocument);
    localStorage.setItem('nomDoc',this.nomDocument);
    this.router.navigate(['/autoriser']);
  }

}
