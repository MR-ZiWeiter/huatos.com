import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdcIntroctionsComponent } from './pdc-introctions.component';

describe('PdcIntroctionsComponent', () => {
  let component: PdcIntroctionsComponent;
  let fixture: ComponentFixture<PdcIntroctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdcIntroctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdcIntroctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
