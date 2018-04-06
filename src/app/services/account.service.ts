import { Injectable } from '@angular/core';
import {Utilisateur} from "../model/model.utilisateur";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component";

@Injectable()
export class AccountService {
  constructor(public http: Http) { }

  createAccount(user:Utilisateur){
    return this.http.post(AppComponent.API_URL+'/account/register',user)
      .map(resp=>resp.json());
  }
}
