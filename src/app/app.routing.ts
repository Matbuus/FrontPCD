import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {UrlPermission} from "./urlPermission/url.permission";
import {AjoutEtudiantComponent} from "./components/ajout-etudiant/ajout-etudiant.component";
import {AjoutEnseignantComponent} from "./components/ajout-enseignant/ajout-enseignant.component";
import {ResponsablePermission} from "./urlPermission/responsable.permission";
import {AjoutMatiereComponent} from "./components/ajout-matiere/ajout-matiere.component";


const appRoutes: Routes = [
  { path: 'profile', component:ProfileComponent ,canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  {path : 'profile/ajoutetudiant', component : AjoutEtudiantComponent,canActivate: [ResponsablePermission]},
  {path : 'profile/ajoutenseignant', component : AjoutEnseignantComponent,canActivate: [ResponsablePermission]},
  {path : 'profile/ajoutmatiere', component : AjoutMatiereComponent,canActivate: [ResponsablePermission]},
  // otherwise redirect to profile
  { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);
