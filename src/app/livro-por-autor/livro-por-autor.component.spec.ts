import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroPorAutorComponent } from './livro-por-autor.component';

describe('LivroPorAutorComponent', () => {
  let component: LivroPorAutorComponent;
  let fixture: ComponentFixture<LivroPorAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroPorAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroPorAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
