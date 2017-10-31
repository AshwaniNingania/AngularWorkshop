import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwichChildComponent } from './swich-child.component';

describe('SwichChildComponent', () => {
  let component: SwichChildComponent;
  let fixture: ComponentFixture<SwichChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwichChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwichChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
