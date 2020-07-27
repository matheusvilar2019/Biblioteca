import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarLivroComponent } from './publicar-livro.component';

describe('PublicarLivroComponent', () => {
  let component: PublicarLivroComponent;
  let fixture: ComponentFixture<PublicarLivroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarLivroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
