import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLivrosComponent } from './top-livros.component';

describe('TopLivrosComponent', () => {
  let component: TopLivrosComponent;
  let fixture: ComponentFixture<TopLivrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLivrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
