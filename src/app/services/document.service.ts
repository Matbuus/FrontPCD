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

}
