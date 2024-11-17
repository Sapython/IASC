import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchAComponent } from './research-a.component';

describe('ResearchAComponent', () => {
  let component: ResearchAComponent;
  let fixture: ComponentFixture<ResearchAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
