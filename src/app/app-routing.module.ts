import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsefulLinksComponent } from './components/useful-links/useful-links.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { LiveriesComponent } from './components/liveries/liveries.component';
import { PlanesComponent } from './components/planes/planes.component';
import { MembersComponent } from './components/members/members.component';
import { FlightsComponent } from './components/flights/flights.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'flights', component: FlightsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'links', component: UsefulLinksComponent },
  { path: 'plugins', component: PluginsComponent },
  { path: 'liveries', component: LiveriesComponent },
  { path: 'planes', component: PlanesComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
