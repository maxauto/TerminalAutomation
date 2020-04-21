/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TagnameComponent } from './tagname.component';

describe('TagnameComponent', () => {
  let component: TagnameComponent;
  let fixture: ComponentFixture<TagnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
