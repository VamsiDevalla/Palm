import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {

  dropDownExpanded: boolean;
  searchCategory: string;
  constructor() { }

  ngOnInit() {
    this.dropDownExpanded = false;
    this.searchCategory = 'Application Number'
  }

  dropDownToggle() {
    this.dropDownExpanded = !this.dropDownExpanded;
  }

  selectedSearchCategory(category: string) {
    this.searchCategory = category;
    this.dropDownExpanded = false;
  }

}
