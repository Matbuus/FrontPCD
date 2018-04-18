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
<<<<<<< HEAD
import { HeaderComponent } from './components/header/header.component';
import { DocumentListComponent } from './components/documents/document-list.component';
import {DocumentService} from "./services/document.service";
=======
import { AjoutEnseignantComponent } from './components/ajout-enseignant/ajout-enseignant.component';
import { AjoutEtudiantComponent } from './components/ajout-etudiant/ajout-etudiant.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DocumentListComponent } from './components/document/document-list.component';
>>>>>>> myBranch


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileEtudiantComponent,
    ProfileEnseignantComponent,
    ProfileResponsableComponent,
<<<<<<< HEAD
    HeaderComponent,
    DocumentListComponent,
=======
    AjoutEnseignantComponent,
    AjoutEtudiantComponent,
    ProfileComponent,
    DocumentListComponent

>>>>>>> myBranch


  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,routing, FacebookModule.forRoot(),
  ],
  providers: [AuthService,AccountService,UrlPermission, DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }


