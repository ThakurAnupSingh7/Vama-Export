import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingOrderComponent } from './selling-order.component';

describe('SellingOrderComponent', () => {
  let component: SellingOrderComponent;
  let fixture: ComponentFixture<SellingOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
