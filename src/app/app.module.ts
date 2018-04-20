import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from "./services/auth.service";
import {HttpModule} from "@angular/http";
import {AccountService} from "./services/account.service";
import {routing} from "./app.routing";
import {FacebookModule} from "ngx-facebook";
import {UrlPermission} from "./urlPermission/url.permission";
import { ProfileEtudiantComponent } from './components/profile-etudiant/profile-etudiant.component';
import { ProfileEnseignantComponent } from './components/profile-enseignant/profile-enseignant.component';
import { ProfileResponsableComponent } from './components/profile-responsable/profile-responsable.component';
import { AjoutEnseignantComponent } from './components/ajout-enseignant/ajout-enseignant.component';
import { AjoutEtudiantComponent } from './components/ajout-etudiant/ajout-etudiant.component';
import { ProfileComponent } from './components/profile/profile.component';
<<<<<<< HEAD
import { DocumentListComponent } from './components/document/document-list.component';
=======
import {ResponsablePermission} from "./urlPermission/responsable.permission";
import { HeaderEnseignantComponent } from './components/header-enseignant/header-enseignant.component';
import { HeaderResponsableComponent } from './components/header-responsable/header-responsable.component';
import { HeaderEtudiantComponent } from './components/header-etudiant/header-etudiant.component';
import { AjoutMatiereComponent } from './components/ajout-matiere/ajout-matiere.component';
>>>>>>> e2c097f4de52db827a930ddfb01821f297af17b4


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileEtudiantComponent,
    ProfileEnseignantComponent,
    ProfileResponsableComponent,
    AjoutEnseignantComponent,
    AjoutEtudiantComponent,
    ProfileComponent,
<<<<<<< HEAD
    DocumentListComponent
=======
    HeaderEnseignantComponent,
    HeaderResponsableComponent,
    HeaderEtudiantComponent,
    AjoutMatiereComponent,
>>>>>>> e2c097f4de52db827a930ddfb01821f297af17b4



  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,routing, FacebookModule.forRoot(),
  ],
  providers: [AuthService,AccountService,UrlPermission,ResponsablePermission],
  bootstrap: [AppComponent]
})
export class AppModule { }


