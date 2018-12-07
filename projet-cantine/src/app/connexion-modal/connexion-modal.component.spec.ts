import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionModalComponent } from './connexion-modal.component';

describe('ConnexionModalComponent', () => {
  let component: ConnexionModalComponent;
  let fixture: ComponentFixture<ConnexionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
