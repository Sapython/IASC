import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GCPageComponent } from './g-c-page.component';

describe('GCPageComponent', () => {
  let component: GCPageComponent;
  let fixture: ComponentFixture<GCPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GCPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GCPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
