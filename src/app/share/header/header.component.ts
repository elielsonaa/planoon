import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router}              from '@angular/router'

import { MaterializeDirective }  from 'angular2-materialize'
import { LoginService }          from '../login/login.service'
import { ComunicationService } from "../comunicacao/comunicacao.service";




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private _loginService: LoginService,
        private _router: Router,
        private _comunication: ComunicationService) {
        }


  ngOnInit() {
  }
 ngAfterViewInit() {
       // $('.button-collapse').sideNav();
    };

    ngIf() {
        return false;
    }
    
    logout(event) {
        this._loginService.logout();
        this._router.navigate(['/']);
        this.contato();
    };

    contato() {
        this._comunication.contato = true;
        this._comunication.cadastro = false;
    }
}
