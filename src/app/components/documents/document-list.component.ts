import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DocumentService} from "../../services/document.service";
import {Document} from "../../model/model.document";
import {Router} from "@angular/router";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentListComponent implements OnInit {
  tabDocuments: any = [];
  constructor(public documentService: DocumentService, public router: Router) {
    this.documentService.getDocuments().subscribe(data => {console.log(data); this.tabDocuments = data as Document []; })

  }

  ngOnInit() {
    this.documentService.getDocuments().subscribe(data => {console.log(data); this.tabDocuments = data as Document []; })
  }

}
