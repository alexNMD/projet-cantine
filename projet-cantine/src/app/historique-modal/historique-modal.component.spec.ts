import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueModalComponent } from './historique-modal.component';

describe('HistoriqueModalComponent', () => {
  let component: HistoriqueModalComponent;
  let fixture: ComponentFixture<HistoriqueModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
