import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCell } from './header.cell';

describe('HeaderCell', () => {
  let component: HeaderCell;
  let fixture: ComponentFixture<HeaderCell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCell ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
