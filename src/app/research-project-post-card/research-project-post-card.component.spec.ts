import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchProjectPostCardComponent } from './research-project-post-card.component';

describe('ResearchProjectPostCardComponent', () => {
  let component: ResearchProjectPostCardComponent;
  let fixture: ComponentFixture<ResearchProjectPostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchProjectPostCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchProjectPostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
