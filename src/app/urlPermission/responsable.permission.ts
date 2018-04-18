import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Utilisateur} from "../model/model.utilisateur";

@Injectable()
export class ResponsablePermission implements CanActivate {
  currentUser : Utilisateur ;
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser.role == 'ADMIN') {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/profile'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
