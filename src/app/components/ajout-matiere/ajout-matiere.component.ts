import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Matiere} from "../../model/model.matiere";
import {Router} from "@angular/router";
import {AccountService} from "../../services/account.service";
import {Document} from "../../model/model.document";
import {ClasseService} from "../../services/classe.service";
import {Classe} from "../../model/model.classe";
import {MatiereService} from "../../services/matiere.service";

@Component({
  selector: 'app-ajout-matiere',
  templateUrl: './ajout-matiere.component.html',
  styleUrls: ['./ajout-matiere.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AjoutMatiereComponent implements OnInit {
  matiere : Matiere = new Matiere();
  errorMessage: string;
  constructor(public matiereService: MatiereService, public router: Router) {
  }

  ngOnInit() {

  }
  ajouter() {

    console.log("nom : "+this.matiere.nom + "   duree  :  "+this.matiere.duree);

    this.matiereService.ajouterMatiere(this.matiere).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )


    }
}
