import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryHeaderComponent } from './components/primary-header/primary-header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SecondaryHeaderComponent } from './components/secondary-header/secondary-header.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';
import { AboutComponent } from './components/about/about.component';
import { ContentHistoryComponent } from './components/content-history/content-history.component';
import { PetitionInformationComponent } from './components/petition-information/petition-information.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryHeaderComponent,
    SideNavComponent,
    SecondaryHeaderComponent,
    ActionButtonsComponent,
    TabBarComponent,
    AboutComponent,
    ContentHistoryComponent,
    PetitionInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
