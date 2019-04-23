import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodPublishComponent } from './good-publish.component';

describe('GoodPublishComponent', () => {
  let component: GoodPublishComponent;
  let fixture: ComponentFixture<GoodPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
