import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {UrlPermission} from "./urlPermission/url.permission";
import {AjoutEtudiantComponent} from "./components/ajout-etudiant/ajout-etudiant.component";
import {AjoutEnseignantComponent} from "./components/ajout-enseignant/ajout-enseignant.component";
import {ResponsablePermission} from "./urlPermission/responsable.permission";
<<<<<<< HEAD
import {DocumentListComponent} from "./components/documents/documentsAdministratif/affichageDocuments/document-list.component";
import {PublierDocumentComponent} from "./components/documents/documentsAdministratif/publierDocuments/publier-document.component";
=======
import {AjoutMatiereComponent} from "./components/ajout-matiere/ajout-matiere.component";

>>>>>>> myBranch

const appRoutes: Routes = [
  { path: 'profile', component:ProfileComponent ,canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  {path : 'profile/ajoutetudiant', component : AjoutEtudiantComponent,canActivate: [ResponsablePermission]},
  {path : 'profile/ajoutenseignant', component : AjoutEnseignantComponent,canActivate: [ResponsablePermission]},
<<<<<<< HEAD
  {path: 'profile/documentsadministratifs', component: DocumentListComponent, canActivate: [ResponsablePermission]},
  {path: 'profile/publierdocumentadministratifs', component: PublierDocumentComponent, canActivate: [ResponsablePermission]},
=======
  {path : 'profile/ajoutmatiere', component : AjoutMatiereComponent,canActivate: [ResponsablePermission]},
>>>>>>> myBranch
  // otherwise redirect to profile
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);
