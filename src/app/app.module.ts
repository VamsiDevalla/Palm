import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryHeaderComponent } from './components/primary-header/primary-header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryHeaderComponent,
    SideNavComponent,
    SecondaryHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
