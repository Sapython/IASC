import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBComponent } from './research-b.component';

describe('ResearchBComponent', () => {
  let component: ResearchBComponent;
  let fixture: ComponentFixture<ResearchBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
