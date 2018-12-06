import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlatModalComponent } from './add-plat-modal.component';

describe('AddPlatModalComponent', () => {
  let component: AddPlatModalComponent;
  let fixture: ComponentFixture<AddPlatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
