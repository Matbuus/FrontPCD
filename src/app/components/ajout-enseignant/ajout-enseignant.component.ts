import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Utilisateur} from "../../model/model.utilisateur";
import {Enseignant} from "../../model/model.enseignant";
import {Router} from "@angular/router";
import {Compte} from "../../model/model.compte";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-ajout-enseignant',
  templateUrl: './ajout-enseignant.component.html',
  styleUrls: ['./ajout-enseignant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AjoutEnseignantComponent implements OnInit {
  user: Utilisateur = new Utilisateur();
  enseignant: Enseignant = new Enseignant();
  compte: Compte = new Compte();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) {
  }

  ngOnInit() {
  }

  register() {
    console.log("Email : " + this.compte.email + " Nom : " + this.enseignant.nom + " Prenom " + this.enseignant.prenom + " ID " + this.enseignant.idEnseignant);
    this.accountService.createAccount(this.enseignant, this.compte).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )

  }
}
