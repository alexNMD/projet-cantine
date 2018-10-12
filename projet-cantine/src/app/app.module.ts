import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

// Import routing
import { ROUTES } from './routes/app.routes';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';

import { LoginComponent } from './login/login.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { PlatComponent } from './plat/plat.component';

import { CompteModalComponent } from './compte-modal/compte-modal.component';
import { PanierModalComponent } from './panier-modal/panier-modal.component';
import { RechargeModalComponent } from './recharge-modal/recharge-modal.component';
import { HistoriqueModalComponent } from './historique-modal/historique-modal.component';
import { GestionComponent } from './gestion/gestion.component';
import { PlatModalComponent } from './plat-modal/plat-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    LoginComponent,
    CompteModalComponent,
    CalendrierComponent,
    PlatComponent,
    PanierModalComponent,
    RechargeModalComponent,
    HistoriqueModalComponent,
    GestionComponent
    PlatModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'})
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CompteModalComponent, PanierModalComponent, RechargeModalComponent, HistoriqueModalComponent, PlatModalComponent]
})
export class AppModule { }
