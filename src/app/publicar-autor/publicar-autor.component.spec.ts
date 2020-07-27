import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarAutorComponent } from './publicar-autor.component';

describe('PublicarAutorComponent', () => {
  let component: PublicarAutorComponent;
  let fixture: ComponentFixture<PublicarAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
