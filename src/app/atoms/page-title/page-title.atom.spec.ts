import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTitleAtom } from './page-title.atom';

describe('PageTitleAtom', () => {
  let component: PageTitleAtom;
  let fixture: ComponentFixture<PageTitleAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTitleAtom ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTitleAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
