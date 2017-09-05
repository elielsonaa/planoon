import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './share/login/login.component';
import { CallBackLoginComponent } from './share/callback/callback.component';
import { PainelComponent } from './painel/painel.component';
import { AuthGuard } from './share/guard/auth.guard';

const PLNOON_ROUTES: Routes = [
    { path: '', component: HomeComponent }, // , canActivate: [AuthGuard]
    { path: 'painel', component: PainelComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'user/:token', component: CallBackLoginComponent },
    // { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(PLNOON_ROUTES);