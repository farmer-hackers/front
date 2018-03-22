import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchGameComponent } from './launch-game.component';

describe('LaunchGameComponent', () => {
  let component: LaunchGameComponent;
  let fixture: ComponentFixture<LaunchGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
