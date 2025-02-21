import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { CourseDetailsService } from './services/courseDetails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CoursesService, CourseDetailsService]  // hierachical dependency
})
export class AppComponent {
  title = 'delineUniversity';

  constructor(private courses: CoursesService) { }
}
