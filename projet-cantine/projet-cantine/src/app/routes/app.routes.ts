import { Routes } from "@angular/router";
import { GestionComponent } from "../gestion/gestion.component";
import { ContentComponent } from "../content/content.component";


export const ROUTES: Routes = [
    {
        path: "gestion",
        component: GestionComponent,
    },
    {
        path: "",
        component: ContentComponent,
    },
];
