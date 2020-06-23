import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from '../components/home/home.component';
import { TestComponent } from '../test/test.component';

/**
 * Ajoutez les routes ici
 * path: lien des routes
 * component: la page et la classe à appeler
 * redirectTo: si l'url est atteint alors rediriger vers
 */

var ROUTES:Routes=[
        {
            path:"",
            component:HomeComponent
        },
        {
            path:"test",
            component:TestComponent
        },
        {
            path:"**",
            redirectTo:""
        }
    ]

export const ROUTING=RouterModule.forRoot(ROUTES);