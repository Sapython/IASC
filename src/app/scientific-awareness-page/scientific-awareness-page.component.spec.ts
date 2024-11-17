import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScientificAwarenessPageComponent } from './scientific-awareness-page.component';

describe('ScientificAwarenessPageComponent', () => {
  let component: ScientificAwarenessPageComponent;
  let fixture: ComponentFixture<ScientificAwarenessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScientificAwarenessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificAwarenessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
