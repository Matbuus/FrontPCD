import { Injectable } from '@angular/core';
import {Utilisateur} from "../model/model.utilisateur";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";
import {Enseignant} from "../model/model.enseignant";
import {Compte} from "../model/model.compte";
import {Etudiant} from "../model/model.etudiant";


@Injectable()
export class AccountService {
  constructor(public http: Http) { }

  creerCompteEnseignant(enseignant:Enseignant, compte:Compte){
    let body = {enseignant,compte};
    return this.http.post(AppComponent.API_URL+'/responsable/comptes/add/enseignant',body)
      .map(resp=>resp.json());
  }
  creerCompteEtudiant(etudiant:Etudiant, compte:Compte){
    let body = {etudiant,compte};
    return this.http.post(AppComponent.API_URL+'/responsable/comptes/add/etudiant',body)
      .map(resp=>resp.json());
  }
}
