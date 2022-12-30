import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeCell } from './datetime.cell';

describe('DatetimeCell', () => {
  let component: DatetimeCell;
  let fixture: ComponentFixture<DatetimeCell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatetimeCell ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatetimeCell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
