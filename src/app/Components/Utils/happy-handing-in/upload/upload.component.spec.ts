import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyHandingInUploadComponent } from './upload.component';

describe('HappyHandingInUploadComponent', () => {
  let component: HappyHandingInUploadComponent;
  let fixture: ComponentFixture<HappyHandingInUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyHandingInUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyHandingInUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
