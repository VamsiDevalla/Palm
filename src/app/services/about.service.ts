import { Injectable } from '@angular/core';
import aboutData from '../../assets/data/link1.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor() {
  }

  getAboutData() {
    return of(aboutData);
  }
}
