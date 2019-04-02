import { TestBed } from '@angular/core/testing';

import { ContentHistoryService } from './content-history.service';

describe('ContentHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentHistoryService = TestBed.get(ContentHistoryService);
    expect(service).toBeTruthy();
  });
});
