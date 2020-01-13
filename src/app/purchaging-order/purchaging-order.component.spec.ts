import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchagingOrderComponent } from './purchaging-order.component';

describe('PurchagingOrderComponent', () => {
  let component: PurchagingOrderComponent;
  let fixture: ComponentFixture<PurchagingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchagingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchagingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
