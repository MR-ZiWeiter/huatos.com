import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelconComponent } from './welcon.component';

describe('WelconComponent', () => {
  let component: WelconComponent;
  let fixture: ComponentFixture<WelconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
