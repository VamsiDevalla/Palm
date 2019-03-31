import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.scss']
})
export class PrimaryHeaderComponent implements OnInit {
  menuHidden: boolean;
  @Output()
  menuToggled =  new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    this.menuHidden = true;
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
    this.menuToggled.emit(this.menuHidden);
  }

}
