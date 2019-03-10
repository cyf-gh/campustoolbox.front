import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HHIEditComponent } from './edit.component';

describe('HHIEditComponent', () => {
  let component: HHIEditComponent;
  let fixture: ComponentFixture<HHIEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HHIEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HHIEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
