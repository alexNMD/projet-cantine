import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlatModalComponent } from './edit-plat-modal.component';

describe('EditPlatModalComponent', () => {
  let component: EditPlatModalComponent;
  let fixture: ComponentFixture<EditPlatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
