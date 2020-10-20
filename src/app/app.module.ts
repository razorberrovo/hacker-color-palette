import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MaterialComponent } from './palette-types/material/material.component';
import { FlatComponent } from './palette-types/flat/flat.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ColorComponent } from './shared/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MaterialComponent,
    FlatComponent,
    NavbarComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
