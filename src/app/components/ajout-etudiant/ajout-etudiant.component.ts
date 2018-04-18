import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Compte} from "../../model/model.compte";
import {Utilisateur} from "../../model/model.utilisateur";
import {Etudiant} from "../../model/model.etudiant";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AjoutEtudiantComponent implements OnInit {
  user: Utilisateur = new Utilisateur();
  etudiant: Etudiant = new Etudiant();
  compte: Compte = new Compte();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) {
  }


  ngOnInit() {
  }
  register() {
    console.log("Email : " + this.compte.email + " Nom : " + this.etudiant.nom + " Prenom " + this.etudiant.prenom + " ID " + this.etudiant.numInscription);
    this.accountService.creerCompteEtudiant(this.etudiant, this.compte).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )

  }

}
