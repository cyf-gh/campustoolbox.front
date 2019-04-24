import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnGoodsComponent } from './own-goods.component';

describe('OwnGoodsComponent', () => {
  let component: OwnGoodsComponent;
  let fixture: ComponentFixture<OwnGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
