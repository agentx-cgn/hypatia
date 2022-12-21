import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborPage } from './labor.page';

describe('LaborPage', () => {
  let component: LaborPage;
  let fixture: ComponentFixture<LaborPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaborPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
