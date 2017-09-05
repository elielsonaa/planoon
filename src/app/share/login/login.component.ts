import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


import { MaterializeDirective, toast } from 'angular2-materialize';
import swal from 'sweetalert2';

import { LoginService} from '../login/login.service';
import { User} from '../usuario/usuario.model';
import { UserService } from '../usuario/usuario.service';
import { ComunicationService } from '../comunicacao/comunicacao.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  user: User = new User();
    private showLoading: boolean = false;
    private errorMessage: string = null;
    private forgotLayout: boolean = false;
    private forgotTxtButton: string = 'Login';
    private forgotTxt: string = 'Esqueceu sua senha?';
    private complete: boolean = false;
    constructor(private _loginService: LoginService,
        private _router: Router,
        private userService: UserService,
        private _comunication: ComunicationService) {

    }

    /*Controles referentes aos logins */
    loginFacebook() {
        this.showLoading = true;
        this.errorMessage = null;
        window.location.href = '/auth/facebook';
    }

    loginLinkedin() {
        this.showLoading = true;
        this.errorMessage = null;
        window.location.href = '/auth/linkedin';
    }

    loginGoogle() {
        this.showLoading = true;
        this.errorMessage = null;

        window.location.href = '/auth/google';
    }

    // Recebe submit dos forms de Login e Esqueceu senha
    onSubmit() {
        this.showLoading = true;
        this.errorMessage = null;
        // Direcionar para o service adequado (Login/Forgot)
        if (this.forgotLayout) {
            this.forgotPass();
        }
        else {
            this.userService.token(this.user).subscribe(
                result => this.onLoginResult(result),
                error => this.onLoginError(error),
                () => this.onComplete()
            );
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
        toast('Olá ' + this._loginService.getUser().nomeCompleto + '. Tudo bem? ', 5000, 'rouded');
        this._router.navigate(['painel']);
    }
    onLoginError(error: any) {
        this.showLoading = false;
        this.errorMessage = error;
        //{"success":false,"message":"Usuario não encontrado, por favor cadastre-se."}
        swal(
            'Oops...',
            JSON.parse(error._body).message,
            'error'
        ).catch(swal.noop);
    }
    onComplete() {
        console.log("Operação finalizada!");
    }
    /*Fim Controles de logins */

    /*Esqueceu senha inicio do processo */

    // Definição de layout
    onClickFgt() {
        this.forgotLayout = !this.forgotLayout;
        if (this.forgotTxtButton === 'Login') {
            this.forgotTxtButton = 'Enviar';
        }
        else {
            this.forgotTxtButton = 'Login';
        }
        if (this.forgotTxt === 'Esqueceu sua senha?') {
            toast('Esqueceu a senha? não tem problema, informe seu e-mail para criar uma nova senha.', 7000, 'rouded');
            this.forgotTxt = 'Realizar login?';
        }
        else {
            this.forgotTxt = 'Esqueceu sua senha?';
        }

    }

    forgotPass() {
        var mail = { email: this.user.email }

        this.userService.forgotPass(mail).subscribe(
            result => this.onForgotResult(result),
            error => this.onForgotError(error),
            () => this.onComplete()
        );
    };
    onForgotResult(result: any) {
        this.onClickFgt();
        this.showLoading = false;
        toast(result.message, 3000, 'rouded');

    };
    onForgotError(error: any) {
        this.showLoading = false;
        this.errorMessage = error;
        this.user = new User();
        swal(
            'Oops...',
            JSON.parse(error._body).message,
            'error'
        ).catch(swal.noop);
    };
    /*Fim Esqueceu senha */

    // Tela e Carregamento
    ngAfterViewInit() {
    };

    ngIf() {

    }
}
