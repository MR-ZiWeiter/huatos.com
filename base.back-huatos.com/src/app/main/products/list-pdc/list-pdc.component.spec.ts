import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPdcComponent } from './list-pdc.component';

describe('ListPdcComponent', () => {
  let component: ListPdcComponent;
  let fixture: ComponentFixture<ListPdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
