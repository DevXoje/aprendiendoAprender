import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Muuri } from "muuri";
import { Animations } from "web-animations-js";
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VideosComponent } from './videos/videos.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { NewsGaleryComponent } from './news-galery/news-galery.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { BannerComponent } from './banner/banner.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    ContactoComponent,
    VideosComponent,
    ArticulosComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    ShowcaseComponent,
    NewsGaleryComponent,
    NewsCardComponent,
    BannerComponent,
    SocialLinksComponent,
    PiePaginaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
