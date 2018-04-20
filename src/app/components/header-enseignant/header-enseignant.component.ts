import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Utilisateur} from "../../model/model.utilisateur";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-enseignant',
  templateUrl: './header-enseignant.component.html',
  styleUrls: ['./header-enseignant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderEnseignantComponent implements OnInit {

  currentUser: Utilisateur;

  constructor(public authService: AuthService, public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

  }

  ngOnInit() {
  }

  logOut() {
    console.log("ok");
    this.authService.logOut()
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {

        });
  }

}
