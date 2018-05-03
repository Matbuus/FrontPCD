import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DocumentService} from "../../../../services/document.service";
import {Document} from "../../../../model/model.document";
import {Router} from "@angular/router";
import {Utilisateur} from "../../../../model/model.utilisateur";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentListComponent implements OnInit {
  tabDocuments: any = [];
  currentUser: Utilisateur;
  constructor(public documentService: DocumentService, public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.documentService.getDocuments().subscribe(data => {console.log(data); this.tabDocuments = data as Document []; })

  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.documentService.getDocuments().subscribe(data => {console.log(data); this.tabDocuments = data as Document []; })
  }

}
