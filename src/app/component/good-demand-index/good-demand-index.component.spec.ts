import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodDemandIndexComponent } from './good-demand-index.component';

describe('GoodDemandIndexComponent', () => {
  let component: GoodDemandIndexComponent;
  let fixture: ComponentFixture<GoodDemandIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodDemandIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodDemandIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
