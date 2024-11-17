import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatationPageComponent } from './mediatation-page.component';

describe('MediatationPageComponent', () => {
  let component: MediatationPageComponent;
  let fixture: ComponentFixture<MediatationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediatationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediatationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
