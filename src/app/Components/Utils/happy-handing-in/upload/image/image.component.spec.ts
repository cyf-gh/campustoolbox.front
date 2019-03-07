import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyHandingInUploadImageComponent } from './image.component';

describe('HappyHandingInUploadImageComponent', () => {
  let component: HappyHandingInUploadImageComponent;
  let fixture: ComponentFixture<HappyHandingInUploadImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyHandingInUploadImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyHandingInUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
