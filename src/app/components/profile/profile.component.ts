import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Utilisateur} from "../../model/model.utilisateur";
import {Router} from "@angular/router";
import {DocumentListComponent} from "../documents/documentsAdministratif/document-list.component";

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


}
