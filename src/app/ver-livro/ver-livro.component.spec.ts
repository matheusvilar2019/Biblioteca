import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerLivroComponent } from './ver-livro.component';

describe('VerLivroComponent', () => {
  let component: VerLivroComponent;
  let fixture: ComponentFixture<VerLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
