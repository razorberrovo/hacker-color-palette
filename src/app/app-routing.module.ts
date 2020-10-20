import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatComponent } from './palette-types/flat/flat.component';
import { LandingComponent } from './landing/landing.component';
import { MaterialComponent } from './palette-types/material/material.component';

const routes: Routes = [
  { path: '', redirectTo: '70m3', pathMatch: 'full' },
  { path: '70m3', component: LandingComponent },
  { path: 'm4t3r14l', component: MaterialComponent },
  { path: 'f14t', component: FlatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
