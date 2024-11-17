import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterResearchesPageComponent } from './water-researches-page.component';

describe('WaterResearchesPageComponent', () => {
  let component: WaterResearchesPageComponent;
  let fixture: ComponentFixture<WaterResearchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterResearchesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterResearchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
