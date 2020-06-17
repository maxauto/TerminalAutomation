import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOfficeComponent } from './sale-office.component';

describe('SaleOfficeComponent', () => {
  let component: SaleOfficeComponent;
  let fixture: ComponentFixture<SaleOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
