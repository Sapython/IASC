import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthResearchesPageComponent } from './health-researches-page.component';

describe('HealthResearchesPageComponent', () => {
  let component: HealthResearchesPageComponent;
  let fixture: ComponentFixture<HealthResearchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthResearchesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthResearchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
