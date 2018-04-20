import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Matiere} from "../../model/model.matiere";

@Component({
  selector: 'app-ajout-matiere',
  templateUrl: './ajout-matiere.component.html',
  styleUrls: ['./ajout-matiere.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AjoutMatiereComponent implements OnInit {
  matiere : Matiere = new Matiere();


  constructor() { }

  ngOnInit() {
  }

}
