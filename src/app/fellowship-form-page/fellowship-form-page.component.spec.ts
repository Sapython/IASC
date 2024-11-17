import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FellowshipFormPageComponent } from './fellowship-form-page.component';

describe('FellowshipFormPageComponent', () => {
  let component: FellowshipFormPageComponent;
  let fixture: ComponentFixture<FellowshipFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FellowshipFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FellowshipFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
