import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import {Document} from "../model/model.document";
import 'rxjs/add/operator/map';
import {AppComponent} from "../app.component";
import {HttpHeaders} from "@angular/common/http";
@Injectable()
export class DocumentService{
  constructor(public http: Http) { }
  data: any = {};
  getDocuments() {
    return this.http.get(AppComponent.API_URL+"/responsable/documents").map((res: Response) =>
      res.json());
  }

  publierDocuments(formdata: FormData){
    return this.http.post(AppComponent.API_URL+"/responsable/documents/publier", formdata ).map((res: Response) => res.json());
}

  getMatieresProfs() {
    return this.http.get(AppComponent.API_URL+"/enseignant/documents").map((res: Response) =>
      res.json());
  }

  getDocumentsParMatiere(idmatiere: string ) {
    return this.http.get(AppComponent.API_URL+"/enseignant/documents/"+idmatiere).map((res: Response) =>
      res.json());
  }
  getAllMatieres(){
    return this.http.get(AppComponent.API_URL+"/enseignant/matieres").map((res: Response) =>
      res.json());
  }
  publierDocumentsMatiere(formdata: FormData, idmatiere: string){
    return this.http.post(AppComponent.API_URL+"/enseignant/documents/"+idmatiere+"/publier", formdata ).map((res: Response) => res.json());
  }

  getClasses() {
    return this.http.get(AppComponent.API_URL+"/responsable/classes").map((res: Response) =>
      res.json());
  }

  donnerAutorisation(idmatiere: string, idclasse: string, iddocument: string){
    console.log(AppComponent.API_URL+"/enseignant/documents/"+idmatiere+"/"+iddocument+"/autoriser/"+idclasse);
    return this.http.get(AppComponent.API_URL+"/enseignant/documents/"+idmatiere+"/"+iddocument+"/autoriser/"+idclasse)
      .map(resp=>resp.json()).subscribe();
  }


}
