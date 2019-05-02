import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpSelectProvinceComponent } from './pp-select-province.component';

describe('PpSelectProvinceComponent', () => {
  let component: PpSelectProvinceComponent;
  let fixture: ComponentFixture<PpSelectProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpSelectProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpSelectProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
