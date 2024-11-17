import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionResearchesPageComponent } from './nutrition-researches-page.component';

describe('NutritionResearchesPageComponent', () => {
  let component: NutritionResearchesPageComponent;
  let fixture: ComponentFixture<NutritionResearchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionResearchesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionResearchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
