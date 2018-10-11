import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { PanierComponent } from './panier/panier.component';
import { CompteComponent } from './compte/compte.component';
import { LoginComponent } from './login/login.component';
import { GestionCommandesComponent } from './gestion-commandes/gestion-commandes.component';
import { HistoriqueIndivComponent } from './historique-indiv/historique-indiv.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { PlatComponent } from './plat/plat.component';

import { CompteModalComponent } from './compte-modal/compte-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContentComponent,
    PanierComponent,
    CompteComponent,
    LoginComponent,
    GestionCommandesComponent,
    HistoriqueIndivComponent,
    CompteModalComponent
    CalendrierComponent,
    PlatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CompteModalComponent]
})
export class AppModule { }
