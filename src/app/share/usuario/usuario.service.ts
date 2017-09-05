import {Http, Headers}  from '@angular/http'
import {Injectable}                     from '@angular/core'
import 'rxjs/add/operator/map'

import { User} from '../usuario/usuario.model'

import { LoginService} from '../login/login.service'
import { HeadersService } from "../header/header.service";





@Injectable()
export class UserService{
    constructor(private _http: Http, 
                private _header:HeadersService,
                private _loginService:LoginService){
        
    };
    
    public get(){
        return this._http
            .get('/api/users',
             this._header.getJsonHeaders(this._loginService.getToken()))
            .map(res => res.json());
    };
    
    public vldToken(s: any){
        return this._http
            .post('auth/vldToken',
            JSON.stringify(s),
            this._header.getJsonHeaders())
            .map(res => res.json());
    };
     
    public token(u:User){
        return this._http
            .post('/auth/token',
            JSON.stringify(u),
            this._header.getJsonHeaders())
            .map(res => res.json());
    };
   
    public insert(u:User){
        return this._http
            .post('/auth/userAdd',
            JSON.stringify(u),
            this._header.getJsonHeaders())
            .map(res => res.json());
    };
      
   public forgotPass(s: any){
       return this._http
        .post('/api/forgotPass',
        JSON.stringify(s),
        this._header.getJsonHeaders())
        .map(res => res.json());  
   };
   
    public del(id:String){
        return this._http
        .delete('/api/users/' + id,
        this._header.getJsonHeaders(this._loginService.getToken()))
            .map(res => res.json());
    }
}