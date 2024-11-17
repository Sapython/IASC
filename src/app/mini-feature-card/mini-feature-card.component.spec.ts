import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniFeatureCardComponent } from './mini-feature-card.component';

describe('MiniFeatureCardComponent', () => {
  let component: MiniFeatureCardComponent;
  let fixture: ComponentFixture<MiniFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniFeatureCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
