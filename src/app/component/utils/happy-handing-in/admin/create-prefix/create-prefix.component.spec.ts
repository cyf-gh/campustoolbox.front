import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrefixComponent } from './create-prefix.component';

describe('CreatePrefixComponent', () => {
  let component: CreatePrefixComponent;
  let fixture: ComponentFixture<CreatePrefixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePrefixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
