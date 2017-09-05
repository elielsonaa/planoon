import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { toast } from 'angular2-materialize';


import { Contato } from './contato.model';
import { LoginService } from '../login/login.service';
import { ComunicationService } from '../comunicacao/comunicacao.service';
import { ContatoService } from './contato.service';
import { ReCaptchaComponent } from '../recaptcha/recaptcha.component';
import { KzMaskDirective} from '../directives/app.mask.directive';



@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
    titulo:string = " Entre em contato com a Planoon"
    private contato: Contato = new Contato();
    private showLoading: boolean = false;
    private errorMessage: string = null;
    private getCaptcha: boolean;

    constructor(private _loginService: LoginService,
        private _router: Router,
        private formContatoService: ContatoService,
        private _comunication: ComunicationService) {
            
            this.getCaptcha = false;

    };

  ngOnInit() {
    
  }

 //Obter o retorno da captcha (validar no servidor)
    retornoCaptcha(retorno) {
        this.contato.captcha = retorno;
        this.getCaptcha = true;
        
    }

    //Submit Formulário de Contato
    onsubmit() {
        this.showLoading = true;
        this.errorMessage = null;

        if (this.contato.captcha != null) {

            this.formContatoService.send(this.contato).subscribe(
                result => this.onInsertResult(result),
                error => this.onInsertError(error),
                () => this.onComplete()
 
            );
        }
        else{
            toast('Captcha é obrigatorio !', 4000, 'rouded');    
            this.showLoading = false;
            this.getCaptcha = false;
        }
    };

    onInsertResult(result) {
        toast('Olá,   ' + this.contato.nome + '  ! Agradecemos o seu interesse, logo retornaremos ', 4000, 'rouded');
        this.showLoading    = false;
        this.getCaptcha     = false;
        this.contato        = new Contato();
       // grecaptcha.reset();
    }

    onInsertError(error) {
        this.showLoading = false;
        this.getCaptcha = false;
        this.errorMessage = error.json().message;
        //Resetar captcha google
        //grecaptcha.reset();
        // {"success":false,"message":{"code":"ECONNECTION","errno":"ECONNREFUSED","syscall":"connect","address":"127.0.0.1","port":25,"command":"CONN"}}
        toast(JSON.stringify(JSON.parse(error._body).message), 4000, 'rounded');
    }
    //Fim submit formulario

    //Ações relacionadas Login
    logout(event) {
        this._loginService.logout();
        this._router.navigate(['/'])
    };
    onComplete(){
        this.contato = new Contato();
    }
    //Tela e Carregamento
    ngAfterViewInit() {
       // $('.scrollspy').scrollSpy();
       // $('textarea#message').characterCounter();
       // $("#fone").mask("(99) 9999-99999",{placeholder:" "});
    };

    ngIf() {

    }
}