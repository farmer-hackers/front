import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationDetailsComponentComponent } from './information-details-component.component';

describe('InformationDetailsComponentComponent', () => {
  let component: InformationDetailsComponentComponent;
  let fixture: ComponentFixture<InformationDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
