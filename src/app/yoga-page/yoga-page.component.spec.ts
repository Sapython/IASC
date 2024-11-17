import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaPageComponent } from './yoga-page.component';

describe('YogaPageComponent', () => {
  let component: YogaPageComponent;
  let fixture: ComponentFixture<YogaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
