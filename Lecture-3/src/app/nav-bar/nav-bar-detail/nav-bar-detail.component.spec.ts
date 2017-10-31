import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarDetailComponent } from './nav-bar-detail.component';

describe('NavBarDetailComponent', () => {
  let component: NavBarDetailComponent;
  let fixture: ComponentFixture<NavBarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
