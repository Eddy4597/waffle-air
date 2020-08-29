import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { MembersComponent } from './components/members/members.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { UsefulLinksComponent } from './components/useful-links/useful-links.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { LiveriesComponent } from './components/liveries/liveries.component';
import { PlanesComponent } from './components/planes/planes.component';
import { FlightsComponent } from './components/flights/flights.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    PageNotFoundComponent,
    WorkInProgressComponent,
    UsefulLinksComponent,
    PluginsComponent,
    LiveriesComponent,
    PlanesComponent,
    FlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
