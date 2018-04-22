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
<<<<<<< HEAD
import {AjoutClasseComponent} from "./components/ajout-classe/ajout-classe.component";
=======


>>>>>>> fad333068adcb84c6d76a9c2ad11364f4c255a47
const appRoutes: Routes = [
  { path: 'profile', component:ProfileComponent ,canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  {path : 'profile/ajoutetudiant', component : AjoutEtudiantComponent,canActivate: [ResponsablePermission]},
  {path : 'profile/ajoutenseignant', component : AjoutEnseignantComponent,canActivate: [ResponsablePermission]},
  {path: 'profile/documentsadministratifs', component: DocumentListComponent, canActivate: [ResponsablePermission]},
  {path: 'profile/publierdocumentadministratifs', component: PublierDocumentComponent, canActivate: [ResponsablePermission]},
  {path : 'profile/ajoutmatiere', component : AjoutMatiereComponent,canActivate: [ResponsablePermission]},
<<<<<<< HEAD
  {path : 'profile/ajoutclasse', component : AjoutClasseComponent,canActivate: [ResponsablePermission]},
=======
>>>>>>> fad333068adcb84c6d76a9c2ad11364f4c255a47
  // otherwise redirect to profile
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);
