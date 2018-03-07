import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstomArticlesComponent } from './constom-articles.component';

describe('ConstomArticlesComponent', () => {
  let component: ConstomArticlesComponent;
  let fixture: ComponentFixture<ConstomArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstomArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstomArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
