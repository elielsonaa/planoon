import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { LoginService } from "../share/login/login.service";
import { ComunicationService } from "../share/comunicacao/comunicacao.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

      constructor(private _loginService: LoginService,
        private _router: Router,
        private _comunication: ComunicationService) {

    };

  ngOnInit() {

  }
   ngAfterViewInit() {
  
    };

    ngIf() {
        return this._loginService.isLogged();
    };

    logout(event) {
        this._loginService.logout();
        this._router.navigate(['/'])
    };

    cadastro() {
         this._comunication.cadastro = true;
        this._comunication.contato = false;
    };

}
