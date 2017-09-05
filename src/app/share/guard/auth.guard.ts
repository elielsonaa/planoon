import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService }          from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private _loginService: LoginService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         if(this._loginService.isLogged()){
        // if (localStorage.getItem('currentUser')) { return true;}
            // Retorna true se logado
            return true;
         }
  

        // Se não logado, apenas redireciona para a página principal
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}