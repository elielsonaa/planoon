import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { toast } from 'angular2-materialize';
import swal from 'sweetalert2';

import { User } from '../usuario/usuario.model';
import { LoginService } from '../login/login.service';
import { UserService } from '../usuario/usuario.service';
import { ComunicationService } from '../comunicacao/comunicacao.service';




@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
    titulo:string = "Cadastre-se no PlanoOn"
    private user: User = new User();
    private showLoading: boolean = false;
    private passConfirm: string = '';
    private errorMessage: string = null;
    private getCaptcha: boolean;

    constructor(private _loginService: LoginService,
        private _router: Router,
        private _userService: UserService,
        private _comunication: ComunicationService) {
        this.getCaptcha = false;

    };

  ngOnInit() {
  }

retornoCaptcha(retorno) {
        this.user.captcha = retorno;
        this.getCaptcha = true;

    }
    //Submit Formulário
    onsubmit() {
        this.showLoading = true;
        this.errorMessage = null;

        if (this.passConfirm !== this.user.password) {
            toast('As senhas devem ser iguais!', 4000, 'rouded');
            this.getCaptcha = false;
            this.showLoading = false;
            // grecaptcha.reset();
        }
        else {

            if (this.user.captcha != null) {
                this._userService.insert(this.user).subscribe(
                    result => this.onInsertResult(result),
                    error => this.onInsertError(error)
                );
            }
            else {
                toast('Captcha é obrigatorio !', 4000, 'rouded');
                this.showLoading = false;
               this.getCaptcha = false;
            }
        }
    };

    onInsertResult(result) {
        this._loginService.setLogin(result.user, result.token);
        this._loginService.setUrlPhoto();
        this.showLoading = false;
        this.user = new User();
        this.passConfirm = "";
        this._comunication.cadastro = false;
        this._comunication.contato = true;
        this.getCaptcha = false;
        toast('Olá: ' + this._loginService.getUser().nomeCompleto + ' bem vindo ao Planoom! ', 5000, 'rouded');
    }

    onInsertError(error) {
        this.showLoading = false;
        this.errorMessage = error.json().message;
        //Resetar captcha google
        // grecaptcha.reset();
        swal(
            'Oops...',
            JSON.parse(error._body).message,
            'error'
        )
    }
    //Fim submit formulario


    //Tela e Carregamento
    ngAfterViewInit() {
       // $('.scrollspy').scrollSpy();
    };

    ngIf() {

    }
}
