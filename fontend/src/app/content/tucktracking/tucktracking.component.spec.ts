import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TucktrackingComponent } from './tucktracking.component';

describe('TucktrackingComponent', () => {
  let component: TucktrackingComponent;
  let fixture: ComponentFixture<TucktrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TucktrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TucktrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
