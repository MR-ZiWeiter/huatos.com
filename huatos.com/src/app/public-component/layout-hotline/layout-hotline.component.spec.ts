import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHotlineComponent } from './layout-hotline.component';

describe('LayoutHotlineComponent', () => {
  let component: LayoutHotlineComponent;
  let fixture: ComponentFixture<LayoutHotlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutHotlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHotlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
