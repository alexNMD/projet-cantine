import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteModalComponent } from './compte-modal.component';

describe('CompteModalComponent', () => {
  let component: CompteModalComponent;
  let fixture: ComponentFixture<CompteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
