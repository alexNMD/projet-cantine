import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueIndivComponent } from './historique-indiv.component';

describe('HistoriqueIndivComponent', () => {
  let component: HistoriqueIndivComponent;
  let fixture: ComponentFixture<HistoriqueIndivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueIndivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueIndivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
