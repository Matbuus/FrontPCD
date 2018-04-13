import {Compte} from "./model.compte";

export class Utilisateur {
  id : string;
  compte: Compte;
  nom: string="";
  prenom: string="";
  role: string = "";
  numcin: string = "";
}

