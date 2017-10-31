import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDescComponent } from './nav-bar-desc.component';

describe('NavBarDescComponent', () => {
  let component: NavBarDescComponent;
  let fixture: ComponentFixture<NavBarDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
