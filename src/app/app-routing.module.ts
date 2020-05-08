import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ArticulosComponent } from "./articulos/articulos.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { VideosComponent } from "./videos/videos.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
	{ path: '', redirectTo: '/landingPage-component', pathMatch: 'full' },
	{ path: 'landingPage-component', component: LandingPageComponent },
	{ path: 'articulos-component', component: ArticulosComponent },
	{ path: 'contacto-component', component: ContactoComponent },
	{ path: 'videos-component', component: VideosComponent },
	{ path: '**', component: PageNotFoundComponent },
	{ path: '**', component: LandingPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
