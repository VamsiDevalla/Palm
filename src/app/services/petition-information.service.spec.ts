import { TestBed } from '@angular/core/testing';

import { PetitionInformationService } from './petition-information.service';

describe('PetitionInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetitionInformationService = TestBed.get(PetitionInformationService);
    expect(service).toBeTruthy();
  });
});
