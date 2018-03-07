import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContsListComponent } from './conts-list.component';

describe('ContsListComponent', () => {
  let component: ContsListComponent;
  let fixture: ComponentFixture<ContsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
