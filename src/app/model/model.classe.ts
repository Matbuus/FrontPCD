import {Etudiant} from "./model.etudiant";

export class Classe {
  id : Number ;
  nomClasse : string = "";
  autorisationsRecues: any[];
  etudiant : Etudiant[];
}
