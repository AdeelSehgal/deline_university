import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseVideoDetailsComponent } from './course-video-details.component';

describe('CourseVideoDetailsComponent', () => {
  let component: CourseVideoDetailsComponent;
  let fixture: ComponentFixture<CourseVideoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseVideoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseVideoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
