import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationPage } from './simulation.page';

describe('SimulationPage', () => {
  let component: SimulationPage;
  let fixture: ComponentFixture<SimulationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
