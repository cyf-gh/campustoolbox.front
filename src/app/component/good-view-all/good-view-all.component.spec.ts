import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodViewAllComponent } from './good-view-all.component';

describe('GoodViewAllComponent', () => {
  let component: GoodViewAllComponent;
  let fixture: ComponentFixture<GoodViewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodViewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
