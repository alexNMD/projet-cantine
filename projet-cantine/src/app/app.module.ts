import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';

import { LoginComponent } from './login/login.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { PlatComponent } from './plat/plat.component';

import { CompteModalComponent } from './compte-modal/compte-modal.component';
import { PanierModalComponent } from './panier-modal/panier-modal.component';
import { PlatModalComponent } from './plat-modal/plat-modal.component';
import { ConnexionModalComponent } from './connexion-modal/connexion-modal.component';

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
    PlatModalComponent,
    ConnexionModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CompteModalComponent, PanierModalComponent, PlatModalComponent]
})
export class AppModule { }
