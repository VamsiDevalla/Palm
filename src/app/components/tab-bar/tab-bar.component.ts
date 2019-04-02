import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {
  activeTab: string;

  @Output()
  selectedTab = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.activeTab = 'About';
    this.selectedTab.emit(this.activeTab);
  }

  selected(tab: string) {
    this.activeTab = tab;
    this.selectedTab.emit(tab);
  }

}
