import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LOCALE_ID, NgModule} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
// Import routing
import { ROUTES } from './routes/app.routes';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from '@angular/material';

import { LoginComponent } from './login/login.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { PlatComponent } from './plat/plat.component';

import { CompteModalComponent } from './compte-modal/compte-modal.component';
import { PanierModalComponent } from './panier-modal/panier-modal.component';
import { RechargeModalComponent } from './recharge-modal/recharge-modal.component';
import { HistoriqueModalComponent } from './historique-modal/historique-modal.component';
import { GestionComponent } from './gestion/gestion.component';
import { PlatModalComponent } from './plat-modal/plat-modal.component';
import { ConnexionModalComponent } from './connexion-modal/connexion-modal.component';
import { InfosModalComponent } from './infos-modal/infos-modal.component';
import { AddPlatModalComponent } from './add-plat-modal/add-plat-modal.component';
import { FormsModule } from '@angular/forms';
import { EditPlatModalComponent } from './edit-plat-modal/edit-plat-modal.component';
import { AddMenuModalComponent } from './add-menu-modal/add-menu-modal.component';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
export const firebaseConfig = environment.firebaseConfig;

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
    ConnexionModalComponent,
    GestionComponent,
    PlatModalComponent,
    InfosModalComponent,
    AddPlatModalComponent,
    EditPlatModalComponent,
    AddMenuModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}),
    FormsModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule,
      AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
      CompteModalComponent,
      PanierModalComponent,
      RechargeModalComponent,
      HistoriqueModalComponent,
      PlatModalComponent,
      ConnexionModalComponent,
      InfosModalComponent,
      AddPlatModalComponent,
  ]
})
export class AppModule { }
