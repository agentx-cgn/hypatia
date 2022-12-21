import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCell } from './footer.cell';

describe('FooterCell', () => {
  let component: FooterCell;
  let fixture: ComponentFixture<FooterCell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterCell ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterCell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
