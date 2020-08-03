import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAutoresComponent } from './top-autores.component';

describe('TopAutoresComponent', () => {
  let component: TopAutoresComponent;
  let fixture: ComponentFixture<TopAutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
