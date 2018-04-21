import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DocumentService} from "../../../../services/document.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-publier-document',
  templateUrl: './publier-document.component.html',
  styleUrls: ['./publier-document.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublierDocumentComponent implements OnInit {
  file: File;
  titre: string;
  formdata: FormData= new FormData();
  errorMessage: string;

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      let fileSize: number = fileList[0].size;
      console.log(this.file.name);

    }
    console.log(this.titre);
    this.formdata.append('file', this.file);

  }


  constructor(public documentService: DocumentService, public router: Router) { }

  ngOnInit() {

  }

  publier(){

    this.formdata.append('titre', this.titre);
    console.log(this.titre);
    this.documentService.publierDocuments(this.formdata).subscribe(data=>{
        this.router.navigate(['/profile/documentsadministratifs']);
      },err=>{
        this.errorMessage="erreur: Document incorrect";
      }
    )
  }


}
