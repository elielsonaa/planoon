import {Injectable}    from '@angular/core';
import {Subscription}  from 'rxjs/Subscription';
import { ComunicationService } from "./comunicacao.service";


/*CLASSE: Classe abstrata que fornece as funcionalidades para que qualquer 
componete/classe consigam se comunicar entre si, atraves de eventos e subscrições 
*** USO FUTURO ***
todos componentes que desejarem participar das mensagens devem ter estes metodos
e constructors 
*/
@Injectable()
export class absCommunication {

    private subscription: Subscription;

    constructor(private _comunication: ComunicationService) {

        this.subscription = _comunication.receberMsg$.subscribe(
            msg => {
                //Tratar mensaem de retorno
            });
    }
    
    enviarMs(msg: string) {
        this._comunication.Mensagem(msg);
    }
    
}