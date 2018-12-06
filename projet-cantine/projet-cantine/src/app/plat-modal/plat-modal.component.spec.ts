import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatModalComponent } from './plat-modal.component';

describe('PlatModalComponent', () => {
  let component: PlatModalComponent;
  let fixture: ComponentFixture<PlatModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
