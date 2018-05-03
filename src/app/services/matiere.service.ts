import {Injectable} from "@angular/core";
import {Matiere} from "../model/model.matiere";
import {AppComponent} from "../app.component";
import {Http} from "@angular/http";


@Injectable()
export class MatiereService {
  constructor(public http: Http){}
  ajouterMatiere(matiere:Matiere  ){

    return this.http.post(AppComponent.API_URL+'/responsable/matiere/add',matiere)
      .map(resp=>resp.json());
  }

}
