import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProductPageComponent } from './health-product-page.component';

describe('HealthProductPageComponent', () => {
  let component: HealthProductPageComponent;
  let fixture: ComponentFixture<HealthProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
