import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftdetailComponent } from './shiftdetail.component';

describe('ShiftdetailComponent', () => {
  let component: ShiftdetailComponent;
  let fixture: ComponentFixture<ShiftdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
