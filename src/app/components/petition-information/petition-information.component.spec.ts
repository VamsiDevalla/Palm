import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionInformationComponent } from './petition-information.component';

describe('PetitionInformationComponent', () => {
  let component: PetitionInformationComponent;
  let fixture: ComponentFixture<PetitionInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
