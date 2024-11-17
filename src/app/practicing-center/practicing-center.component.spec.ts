import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingCenterComponent } from './practicing-center.component';

describe('PracticingCenterComponent', () => {
  let component: PracticingCenterComponent;
  let fixture: ComponentFixture<PracticingCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticingCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticingCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
