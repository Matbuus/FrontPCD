import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Utilisateur} from "../../model/model.utilisateur";
import {AccountService} from "../../services/account.service";
import {Router} from "@angular/router";
import {Enseignant} from "../../model/model.enseignant";
import {Compte} from "../../model/model.compte";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  user: Utilisateur = new Utilisateur();
  enseignant: Enseignant = new Enseignant();
  compte: Compte = new Compte();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) {
  }

  ngOnInit() {
  }

  register() {
      console.log("Email : " + this.compte.email + " Nom : " + this.enseignant.nom + " Prenom " + this.enseignant.prenom + " ID " +this.enseignant.idEnseignant);
    this.accountService.createAccount(this.enseignant, this.compte).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
  }
}
