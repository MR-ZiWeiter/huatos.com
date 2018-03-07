import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownListComponent } from './down-list.component';

describe('DownListComponent', () => {
  let component: DownListComponent;
  let fixture: ComponentFixture<DownListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
