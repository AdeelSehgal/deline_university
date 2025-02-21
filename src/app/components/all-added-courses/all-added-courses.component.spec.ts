import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAddedCoursesComponent } from './all-added-courses.component';

describe('AllAddedCoursesComponent', () => {
  let component: AllAddedCoursesComponent;
  let fixture: ComponentFixture<AllAddedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAddedCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAddedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
