import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from "@angular/router";

import { toast } from 'angular2-materialize';
import swal from 'sweetalert2';

import { User } from '../usuario/usuario.model';
import { LoginService } from '../login/login.service';
import { UserService } from '../usuario/usuario.service';
import { ComunicationService } from '../comunicacao/comunicacao.service';
import { Observable } from "rxjs/Observable";



@Component({
  providers: [UserService],
  template: `<span> </span>`,
})
export class CallBackLoginComponent implements OnInit {

    private user: User = new User();
    private showLoading: boolean = false;
    private errorMessage: string = null;

    constructor(private _loginService: LoginService,
        private _route: ActivatedRoute,
        private _router: Router,
        private userService: UserService,
        private _comunication: ComunicationService) {

    };

  ngOnInit() {
         this._route.params.subscribe(params => this.routerOnActivate(params['token']));
  };
  
//Parametros recebidos atraves da rota /user/token
routerOnActivate(token: string) {
    if (token != null) {
        this.showLoading = true;
        this.errorMessage = null;
        this.userService.vldToken(token).subscribe(
            result => this.onLoginResult(result),
            error => this.onLoginError(error),
            () => this.onComplete()
        );
    }
    else{
        this._router.navigate(['/']);
    }
}
    /*Eventos de retorno */
    onLoginResult(result: any) {

        this._loginService.setLogin(result.user, result.token);
        this._loginService.setUrlPhoto();
        this.showLoading = false;
        this._comunication.cadastro = false;
        this._comunication.contato = true;
        this.user = new User();
        toast('Olá ' + this._loginService.getUser().nomeCompleto + '.Tudo bem? ', 5000, 'rouded');
        localStorage.setItem('currentUser', JSON.stringify(this._loginService.getUser()));
    };

    onLoginError(error: any) {
        this.showLoading = false;
        this.errorMessage = error;
       swal(
            'Oops...',
            JSON.parse(error._body).message,
            'error'
        ).catch(swal.noop);
        this._router.navigate(['/']);
    };

    onComplete() {
        console.log("Operação finalizada!");
    }
    /*Fim Controles de logins */
    //Tela e Carregamento
    ngAfterViewInit() {

    };
    
    ngIf() {

    }
}