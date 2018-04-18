import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentListComponent implements OnInit {

  documents : Document[] = [];
  constructor() { }

  ngOnInit() {
  }

}
