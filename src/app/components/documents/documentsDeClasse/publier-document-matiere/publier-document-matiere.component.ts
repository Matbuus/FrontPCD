import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {DocumentService} from "../../../../services/document.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-publier-document-matiere',
  templateUrl: './publier-document-matiere.component.html',
  styleUrls: ['./publier-document-matiere.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PublierDocumentMatiereComponent implements OnInit {

  file: File;
  titre: string;
  formdata: FormData= new FormData();
  errorMessage: string;
  description: string;
  nomMatiere: string = localStorage.getItem('nomMatiereSelectionneeAjout');
  idMatiere: string = localStorage.getItem('idMatiereSelectionneeAjout');

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      let fileSize: number = fileList[0].size;
      console.log(this.file.name);

    }
    this.formdata.append('file', this.file);


  }

  constructor(public documentService: DocumentService, public router: Router) { }

  ngOnInit() {

  }

  publier(){
    this.formdata.append('titre', this.titre);
    this.formdata.append('description',this.description);
    this.documentService.publierDocumentsMatiere(this.formdata , this.idMatiere).subscribe(data=>{
        this.router.navigate(['/profile/documentsadministratifs']);
      },err=>{
        this.errorMessage="erreur: Document incorrect";
      }
    )
  }
}
