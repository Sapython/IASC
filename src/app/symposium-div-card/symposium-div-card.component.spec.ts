import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymposiumDivCardComponent } from './symposium-div-card.component';

describe('SymposiumDivCardComponent', () => {
  let component: SymposiumDivCardComponent;
  let fixture: ComponentFixture<SymposiumDivCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymposiumDivCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymposiumDivCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
