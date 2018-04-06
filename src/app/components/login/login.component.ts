import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Utilisateur} from "../../model/model.utilisateur";
import {Compte} from "../../model/model.compte"
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  compte: Compte=new Compte();
  errorMessage:string;
  constructor(private authService :AuthService, private router: Router) { }



  ngOnInit() {
  }

  login(){
    this.authService.logIn(this.compte)
      .subscribe(data=>{
        this.router.navigate(['/profile']);
        },err=>{
        this.errorMessage="error :  Username or password is incorrect";
        }
      )
  }

}
