import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {Utilisateur} from "../../model/model.utilisateur";

@Component({
  selector: 'app-profile-responsable',
  templateUrl: './profile-responsable.component.html',
  styleUrls: ['./profile-responsable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileResponsableComponent implements OnInit {

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
