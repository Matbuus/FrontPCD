import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Matiere} from "../../model/model.matiere";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-ajout-matiere',
  templateUrl: './ajout-matiere.component.html',
  styleUrls: ['./ajout-matiere.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AjoutMatiereComponent implements OnInit {
  matiere : Matiere = new Matiere();


  constructor(public accountService: AccountService, public router: Router) { }

  ngOnInit() {
  }
  ajouter() {

    console.log("nom : "+this.matiere.nom + "   duree  :  "+this.matiere.duree);


    }
}
