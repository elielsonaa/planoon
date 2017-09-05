import {Http, Headers}  from '@angular/http'
import {Injectable}                     from '@angular/core'
import 'rxjs/add/operator/map'

import {Contato}                        from '../contato/contato.model'
import {HeadersService}                 from '../header/header.service'
import {LoginService}                   from '../login/login.service'

@Injectable()
export class ContatoService {
    constructor(private _http: Http, 
                private _header: HeadersService,
                private _loginService:LoginService) {
    }
    /*
     public get(){
        return this._http
            .get('/api/trabalho')
            .map(res => res.json());
    }
    */
    public send(c: Contato) {
        return this._http
            .post('/api/formContato',
            JSON.stringify(c),
            this._header.getJsonHeaders())
            .map(res => res.json());
    }
    /*
    public delete(id:string){
        return this._http
            .delete('./api/trabalho/' + id,
            this._header.getJsonHeaders(this._loginService.getToken()))
            .map(res => res.json());
    }
    */
}