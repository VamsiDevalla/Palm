import { Injectable } from '@angular/core';
import contentHistory from '../../assets/data/contentHistory.json';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentHistoryService {
  
  constructor() { }

  getContentHistory() {
    return of(contentHistory);
  }
}
