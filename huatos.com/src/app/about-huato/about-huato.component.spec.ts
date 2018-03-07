import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHuatoComponent } from './about-huato.component';

describe('AboutHuatoComponent', () => {
  let component: AboutHuatoComponent;
  let fixture: ComponentFixture<AboutHuatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutHuatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHuatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
