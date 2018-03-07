import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingTypeComponent } from './operating-type.component';

describe('OperatingTypeComponent', () => {
  let component: OperatingTypeComponent;
  let fixture: ComponentFixture<OperatingTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatingTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
