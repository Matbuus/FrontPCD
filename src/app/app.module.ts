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
import { DocumentListComponent } from './components/documents/documentsAdministratif/affichageDocuments/document-list.component';
import {DocumentService} from "./services/document.service";
import { AjoutEnseignantComponent } from './components/ajout-enseignant/ajout-enseignant.component';
import { AjoutEtudiantComponent } from './components/ajout-etudiant/ajout-etudiant.component';
import { ProfileComponent } from './components/profile/profile.component';
import {ResponsablePermission} from "./urlPermission/responsable.permission";
import { HeaderEnseignantComponent } from './components/header-enseignant/header-enseignant.component';
import { HeaderResponsableComponent } from './components/header-responsable/header-responsable.component';
import { HeaderEtudiantComponent } from './components/header-etudiant/header-etudiant.component';
import { AjoutMatiereComponent } from './components/ajout-matiere/ajout-matiere.component';
import { PublierDocumentComponent } from './components/documents/documentsAdministratif/publierDocuments/publier-document.component';
import {ClasseService} from "./services/classe.service";
import {MatiereService} from "./services/matiere.service";
import { AjoutClasseComponent } from './components/ajout-classe/ajout-classe.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileEtudiantComponent,
    ProfileEnseignantComponent,
    ProfileResponsableComponent,
    DocumentListComponent,
    AjoutEnseignantComponent,
    AjoutEtudiantComponent,
    ProfileComponent,
    DocumentListComponent,
    HeaderEnseignantComponent,
    HeaderResponsableComponent,
    HeaderEtudiantComponent,
    AjoutMatiereComponent,
    PublierDocumentComponent,
    AjoutClasseComponent,


  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,routing, FacebookModule.forRoot(),
  ],
  providers: [AuthService,AccountService,UrlPermission,ResponsablePermission,DocumentService,ClasseService,MatiereService],
  bootstrap: [AppComponent]
})
export class AppModule { }


