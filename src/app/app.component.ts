import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Palm';
  sideMenuHidden: boolean;

  ngOnInit() {
    this.sideMenuHidden = true;
  }

  menuToggled() {
    this.sideMenuHidden = !this.sideMenuHidden;
  }
}
