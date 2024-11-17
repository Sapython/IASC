import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationsPageComponent } from './collaborations-page.component';

describe('CollaborationsPageComponent', () => {
  let component: CollaborationsPageComponent;
  let fixture: ComponentFixture<CollaborationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
