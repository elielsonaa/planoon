import {Injectable}    from '@angular/core'
import { Subject }     from 'rxjs/Subject';

@Injectable()
export class ComunicationService {
    //Variaveis disponiveis para todos os componentes  
    public cadastro:    boolean = false;
    public contato:     boolean = true;
    public conteudo:    boolean = false;

    //Variaveis para enviar e receber mensagens, modifica nesta classe 
    //pelos metodos desta classe
    private enviarMsg = new Subject<string>();
    private receberMsg = new Subject<string>();

    //Observa as alterações nas variaveis emitindo eventos 
    //aos subscritos, componentes que monitoram estas variaveis
    enviarMsg$ = this.enviarMsg.asObservable();
    receberMsg$ = this.receberMsg.asObservable();

    constructor() {

    }

    //Utilizado para enviar mensagem a todos os subscritos  desta variavel
    Mensagem(req: string) {
        this.enviarMsg.next(req);
    };

    //Utilia para os subscritos enviarem mensagens de retorno
    Resposta(resp: string) {
        this.receberMsg.next(resp);
    }

}