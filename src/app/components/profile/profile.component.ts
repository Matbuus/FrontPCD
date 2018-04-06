import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Utilisateur} from "../../model/model.utilisateur";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  currentUser: Utilisateur;
  constructor(public authService: AuthService, public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));


  }

  ngOnInit() {
  }

// login out from the app
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

  test(){
    console.log("Testing shit");
  }
}
