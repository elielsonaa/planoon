import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../../share/usuario/usuario.service";
import { ComunicationService } from "../../share/comunicacao/comunicacao.service";
import { LoginService } from "../../share/login/login.service";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

 constructor(private _loginService: LoginService,
        private _router: Router,
        private _userService: UserService,
        private _comunication: ComunicationService) {
    };

  ngOnInit() {
  }

}
