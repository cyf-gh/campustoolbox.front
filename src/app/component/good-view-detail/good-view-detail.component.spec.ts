import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodViewDetailComponent } from './good-view-detail.component';

describe('GoodViewDetailComponent', () => {
  let component: GoodViewDetailComponent;
  let fixture: ComponentFixture<GoodViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
