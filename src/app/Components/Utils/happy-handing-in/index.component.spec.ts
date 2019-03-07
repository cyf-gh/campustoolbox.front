import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyHandingInComponent } from './index.component';

describe('HappyHandingInComponent', () => {
  let component: HappyHandingInComponent;
  let fixture: ComponentFixture<HappyHandingInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyHandingInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyHandingInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
