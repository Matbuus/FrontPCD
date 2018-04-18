import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {Utilisateur} from "../../model/model.utilisateur";

@Component({
  selector: 'app-profile-enseignant',
  templateUrl: './profile-enseignant.component.html',
  styleUrls: ['./profile-enseignant.component.css']
})
export class ProfileEnseignantComponent implements OnInit {

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
