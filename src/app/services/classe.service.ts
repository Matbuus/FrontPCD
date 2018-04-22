import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {AppComponent} from "../app.component";
import {Classe} from "../model/model.classe";
@Injectable()
export class ClasseService {
  constructor( public http : Http){}
  data: any = {};
  getClasses(){
    return this.http.get(AppComponent.API_URL+"/responsable/classes").map((res: Response) =>
      res.json());
}

  ajouterClasse(classe:Classe  ){

    return this.http.post(AppComponent.API_URL+'/responsable/classe/add',classe)
      .map(resp=>resp.json());
  }

}
