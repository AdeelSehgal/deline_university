import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/interface/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-all-added-courses',
  templateUrl: './all-added-courses.component.html',
  styleUrls: ['./all-added-courses.component.css']
})
export class AllAddedCoursesComponent implements OnInit {

  allCourses: Courses[] = []
  loader: boolean = true

  constructor(private courses: CoursesService) { }

  ngOnInit(): void {
    this.allCourses = []
    this.getCourses()
  }

  // get all courses
  getCourses(): void {
    this.courses.getCourses().subscribe(
      (res) => {
        this.allCourses = res;
      },
      (err) => {
        console.log(err)
        this.loader = false
        setTimeout(() => {
          alert(err.error.message || 'something wrong happen')
        }, 100);
      },
      () => {
        this.loader = false
      }
    )
  }

  //  delete course
  deleteCourse(courseId: number | undefined): void {
    if (courseId) {
      const confirmDelete = confirm('Are you sure to delete course')
      if (confirmDelete) {
        this.courses.deleteCourse(courseId).subscribe(
          (res) => {
            console.log(res)
          },
          (err) => console.log(err),
          () => { this.getCourses() }
        )
      } else {
        return
      }

    } else {
      alert('Course id is required')
    }
  }
}
