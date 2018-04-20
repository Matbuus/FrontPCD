import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DocumentService} from "../../../../services/document.service";

@Component({
  selector: 'app-publier-document',
  templateUrl: './publier-document.component.html',
  styleUrls: ['./publier-document.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublierDocumentComponent implements OnInit {

  file: any;
  titre: string;
  constructor(public documentService: DocumentService) { }

  ngOnInit() {

  }


}
