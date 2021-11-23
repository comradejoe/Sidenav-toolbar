import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultviewComponent } from './faultview.component';

describe('FaultviewComponent', () => {
  let component: FaultviewComponent;
  let fixture: ComponentFixture<FaultviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaultviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaultviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
