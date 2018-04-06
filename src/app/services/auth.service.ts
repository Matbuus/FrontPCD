import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import {Utilisateur} from "../model/model.utilisateur";
import {Compte} from "../model/model.compte"
import 'rxjs/add/operator/map';
import {AppComponent} from "../app.component";
@Injectable()
export class AuthService {
  constructor(public http: Http) { }

  public logIn(compte: Compte){

    let headers = new Headers();
    headers.append('Accept', 'application/json')


    return this.http.post(AppComponent.API_URL+"/connexion" ,   compte)
      .map((response: Response) => {
      // login successful if there's a jwt token in the response
      let user = response.json();// the returned user object is a principal object
      if (user) {
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    });
  }

  logOut() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    return this.http.get(AppComponent.API_URL+"/deconnexion");

  }

}
