import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkBottomSvgComponent } from './dark-bottom-svg.component';

describe('DarkBottomSvgComponent', () => {
  let component: DarkBottomSvgComponent;
  let fixture: ComponentFixture<DarkBottomSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkBottomSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkBottomSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
