import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionplanDetailComponent } from './subscriptionplan-detail.component';

describe('SubscriptionplanDetailComponent', () => {
  let component: SubscriptionplanDetailComponent;
  let fixture: ComponentFixture<SubscriptionplanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionplanDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionplanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
