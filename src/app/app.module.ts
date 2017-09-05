import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule} from 'angular2-materialize';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';

import { HeaderComponent } from './share/header/header.component';
import { HeadersService } from './share/header/header.service';
import { AuthGuard } from './share/guard/auth.guard';

import { FooterComponent } from './share/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './share/contato/contato.component';
import { LoginComponent } from './share/login/login.component';
import { ReCaptchaComponent } from './share/recaptcha/recaptcha.component';
import { LoginService } from './share/login/login.service';
import { ComunicationService } from "./share/comunicacao/comunicacao.service";
import { UserService } from './share/usuario/usuario.service';
import { ContatoService } from './share/contato/contato.service';
import { CadastroComponent } from './share/cadastro/cadastro.component';
import { CallBackLoginComponent } from './share/callback/callback.component';
import { PainelComponent } from './painel/painel.component';
import { ConteudoComponent } from './painel/conteudo/conteudo.component';
import { NavComponent } from './painel/nav/nav.component';
import { KzMaskDirective } from './share/directives/app.mask.directive';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContatoComponent,
    LoginComponent,
    ReCaptchaComponent,
    CadastroComponent,
    CallBackLoginComponent,
    PainelComponent,
    ConteudoComponent,
    NavComponent,
    KzMaskDirective
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterializeModule
  ],
  providers: [
    LoginService,
    ComunicationService,
    UserService,
    HeadersService,
    ContatoService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
