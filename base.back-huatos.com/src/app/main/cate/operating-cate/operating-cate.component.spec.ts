import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingCateComponent } from './operating-cate.component';

describe('OperatingCateComponent', () => {
  let component: OperatingCateComponent;
  let fixture: ComponentFixture<OperatingCateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatingCateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
