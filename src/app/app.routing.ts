import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {UrlPermission} from "./urlPermission/url.permission";
import {AjoutEtudiantComponent} from "./components/ajout-etudiant/ajout-etudiant.component";
import {AjoutEnseignantComponent} from "./components/ajout-enseignant/ajout-enseignant.component";
import {ResponsablePermission} from "./urlPermission/responsable.permission";
import {DocumentListComponent} from "./components/documents/documentsAdministratif/affichageDocuments/document-list.component";
import {PublierDocumentComponent} from "./components/documents/documentsAdministratif/publierDocuments/publier-document.component";
import {AjoutMatiereComponent} from "./components/ajout-matiere/ajout-matiere.component";
import {AjoutClasseComponent} from "./components/ajout-classe/ajout-classe.component";
import {MatieresListComponent} from "./components/documents/documentsDeClasse/mesDocuments/matieres-list.component";
import {DocumentsParMatiereComponent} from "./components/documents/documentsDeClasse/documents-par-matiere/documents-par-matiere.component";
import {PublierDocumentClasseComponent} from "./components/documents/documentsDeClasse/publier-document-classe/publier-document-classe.component";
import {PublierDocumentMatiereComponent} from "./components/documents/documentsDeClasse/publier-document-matiere/publier-document-matiere.component";
import {AutoriserDocumentComponent} from "./components/documents/documentsDeClasse/autoriser-document/autoriser-document.component";


const appRoutes: Routes = [
  { path: 'profile', component:ProfileComponent ,canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  {path : 'profile/ajoutetudiant', component : AjoutEtudiantComponent,canActivate: [ResponsablePermission]},
  {path : 'profile/ajoutenseignant', component : AjoutEnseignantComponent,canActivate: [ResponsablePermission]},
  {path: 'profile/documentsadministratifs', component: DocumentListComponent, canActivate: [ResponsablePermission]},
  {path: 'profile/publierdocumentadministratifs', component: PublierDocumentComponent, canActivate: [ResponsablePermission]},
  {path : 'profile/ajoutmatiere', component : AjoutMatiereComponent,canActivate: [ResponsablePermission]},
  {path : 'profile/ajoutclasse' , component : AjoutClasseComponent , canActivate: [ResponsablePermission]},
  {path : 'accueil' , component: DocumentListComponent, canActivate: [UrlPermission]},
  {path : 'mesmatieres' , component: MatieresListComponent , canActivate: [UrlPermission]},
  { path: 'matiere/documents', component: DocumentsParMatiereComponent, canActivate: [UrlPermission]},
  { path: 'choixmatiere', component: PublierDocumentClasseComponent, canActivate: [UrlPermission]},
  { path: 'add/docdeclass', component: PublierDocumentMatiereComponent, canActivate: [UrlPermission]},
  { path: 'autoriser', component: AutoriserDocumentComponent, canActivate: [UrlPermission]},
  // otherwise redirect to profile
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);
