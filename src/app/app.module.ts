// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app.router.module';
import { MoviesModule } from './movies/movies.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { MathOperatorComponent } from './math-operator/math-operator.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,   
    FirstPageComponent,
    SecondPageComponent,      
    MathOperatorComponent,   
    ContactUsComponent, 
    PageNotFoundComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    SharedModule,
    MoviesModule,
    AppRouterModule, // Adding App Router Module first before Movies Module will disable all the routing 
                     // That is configured in Movies Module    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
