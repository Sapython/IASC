import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymposiumAndActivitiesPageComponent } from './symposium-and-activities-page.component';

describe('SymposiumAndActivitiesPageComponent', () => {
  let component: SymposiumAndActivitiesPageComponent;
  let fixture: ComponentFixture<SymposiumAndActivitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymposiumAndActivitiesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymposiumAndActivitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
