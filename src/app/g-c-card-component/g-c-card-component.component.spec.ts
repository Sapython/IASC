import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GCCardComponentComponent } from './g-c-card-component.component';

describe('GCCardComponentComponent', () => {
  let component: GCCardComponentComponent;
  let fixture: ComponentFixture<GCCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GCCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GCCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
