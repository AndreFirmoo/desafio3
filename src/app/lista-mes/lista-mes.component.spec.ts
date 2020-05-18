import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMesComponent } from './lista-mes.component';

describe('ListaMesComponent', () => {
  let component: ListaMesComponent;
  let fixture: ComponentFixture<ListaMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
