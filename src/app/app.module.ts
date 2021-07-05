import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { DetailComponent } from './pages/detail/detail.component';
import { OverviewComponent } from './pages/overview/overview.component';



const pages = [
  DetailComponent,
  OverviewComponent
]

const components = [
  ...pages
]

@NgModule({
  declarations: [
    AppComponent,
    ...pages
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
