import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from "@angular/forms";
import { CalendrierComponent } from './calendrier/calendrier.component';
import { PlatComponent } from './plat/plat.component';


@NgModule({
    declarations: [
        AppComponent,
        MonPremierComponent,
        AppareilComponent,
        CalendrierComponent,
        PlatComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
