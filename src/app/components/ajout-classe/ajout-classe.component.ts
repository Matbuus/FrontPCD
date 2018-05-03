import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Matiere} from "../../model/model.matiere";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-ajout-classe',
  templateUrl: './ajout-classe.component.html',
  styleUrls: ['./ajout-classe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AjoutClasseComponent implements OnInit {
  matiere : Matiere = new Matiere();


  constructor(public accountService: AccountService, public router: Router) { }

  ngOnInit() {
  }
  ajouter() {

    console.log("nom : "+this.matiere.nom + "   duree  :  "+this.matiere.duree);


    }
}
