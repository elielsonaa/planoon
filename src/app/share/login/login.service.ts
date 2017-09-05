import {Injectable} from '@angular/core'

import { User} from '../usuario/usuario.model'


@Injectable()
export class LoginService {
    private user: User = null;
    private token: string = "";

    constructor() {

    }
    setLogin(u: User, t: string) {
        this.user = u;
        this.token = t;
        localStorage.setItem('token', JSON.stringify(t));
        localStorage.setItem('user', JSON.stringify(u));
    }

    getToken(): string {
        return this.token;
    }

    getUser() {
        return this.user;
    }
    
    getUserRole(){
        return this.user.role;
    } 
    isLogged() {
        return localStorage.getItem('token') !== null; //this.user != null && this.token != null || 

    }

    logout() {
        this.user = null;
        this.token = null;
        localStorage.clear();
    }
    /*OBJETIVO: retornar url de uma foto valida para utilizar como avatar */
    /*CRITERIO: se o login for de um provedor social utilizar a foto do mesmo */
    /* se o login for via usuario e senha verificar se tem gravado anteriormente foto 
    de provedor social, se tiver usa a primeira que econtrar se não tiver utliza avatar padrão */
    setUrlPhoto() {
        if (this.isLogged()) {
            var social = [
                { cod: 'FB', url: this.user.facebook[0] == null ? "" : this.user.facebook[0].urlImgFB },
                { cod: 'LK', url: this.user.linkedin[0] == null ? "" : this.user.linkedin[0].urlImgLk },
                { cod: 'GL', url: this.user.google[0]   == null ? "" : this.user.google[0].urlImgGL },
                { cod: 'TK', url: './assets/img/avatar.png' }
            ];

            /*propriedade fromLogin grava origem do login */

            /*Login com usuario e senha */
            if (this.user.fromLogin == null) {

                social.forEach(r => {
                    if (r.url != "") {
                        this.user.urlPhoto = r.url;
                    }
                }, this);

            }
            /*Login provedor social, identicar qual e utilizar a foto do mesmo */
            else {
                social.forEach(r => {
                    if (r.cod == this.user.fromLogin) {
                        this.user.urlPhoto = r.url;
                    }
                }, this);
            }
        }
    }
}