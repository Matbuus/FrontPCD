import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {Router} from "@angular/router";
import {Classe} from "../../model/model.classe";
import {ClasseService} from "../../services/classe.service";

@Component({
  selector: 'app-ajout-classe',
  templateUrl: './ajout-classe.component.html',
  styleUrls: ['./ajout-classe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AjoutClasseComponent implements OnInit {
  classe : Classe = new Classe();

  constructor(public classeService: ClasseService, public router: Router) {
  }

  ngOnInit() {

  }
  ajouter() {

    console.log("nom : "+this.classe.nomClasse );

    this.classeService.ajouterClasse(this.classe).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        //this.errorMessage = "username already exist";
      }
    )


  }
}
