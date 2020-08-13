import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorPorAreaComponent } from './autor-por-area.component';

describe('AutorPorAreaComponent', () => {
  let component: AutorPorAreaComponent;
  let fixture: ComponentFixture<AutorPorAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorPorAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorPorAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
