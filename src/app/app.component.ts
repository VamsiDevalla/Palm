import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Palm';
  sideMenuHidden: boolean;
  activeTab: string;

  ngOnInit() {
    this.sideMenuHidden = true;
  }

  menuToggled() {
    this.sideMenuHidden = !this.sideMenuHidden;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
