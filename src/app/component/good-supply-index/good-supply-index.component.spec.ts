import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodSupplyIndexComponent } from './good-supply-index.component';

describe('GoodSupplyIndexComponent', () => {
  let component: GoodSupplyIndexComponent;
  let fixture: ComponentFixture<GoodSupplyIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodSupplyIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodSupplyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
