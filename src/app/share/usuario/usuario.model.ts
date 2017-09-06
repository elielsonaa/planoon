export class User {

    /*role = 'User', 'Professor', 'Tecnico', 'Suporte','Admin'*/
    public role: string;
    public dataCriado: Date;
    public dataLogin: Date;
    public password: string;
    public email: string;
    public nomeCompleto: string;
    public captcha: string;

    public facebook: {
        nome: string,
        urlImgFB: string
    };

    public linkedin: {
        nome: string,
        urlImgLk: string
    };

    public google: {
        nome: string,
        urlImgGL: string
    };
    public fromLogin: string;

    public urlPhoto: string


    constructor() {

    }

}