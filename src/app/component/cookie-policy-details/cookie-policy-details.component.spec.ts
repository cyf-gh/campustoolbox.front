import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiePolicyDetailsComponent } from './cookie-policy-details.component';

describe('CookiePolicyDetailsComponent', () => {
  let component: CookiePolicyDetailsComponent;
  let fixture: ComponentFixture<CookiePolicyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiePolicyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiePolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
