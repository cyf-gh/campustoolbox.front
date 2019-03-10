import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HhiAdminComponent } from './hhi-admin.component';

describe('HhiAdminComponent', () => {
  let component: HhiAdminComponent;
  let fixture: ComponentFixture<HhiAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HhiAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HhiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
