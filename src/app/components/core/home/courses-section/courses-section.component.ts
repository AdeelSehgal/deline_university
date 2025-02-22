import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

type AllCourses = {
  id: string,
  title: string,
  description: string,
  img: string,
  type: string
}
@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit {

  searchValue: string = ''
  allCourses: AllCourses[] = []
  renderedCourse: AllCourses[] = []
  constructor(private courses: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.allCourses = this.courses.courses
    this.renderedCourse = this.courses.courses
  }

  onClick(id: string) {
    this.router.navigateByUrl('course/' + id)
  }

  searchInput(event: Event) {
    this.searchValue = (<HTMLInputElement>event.target).value
  }

  onFilter(filterValue: string) {
    this.renderedCourse = this.allCourses.filter((item) => item.type === filterValue)
  }

  onSearch() {
    if (this.searchValue === '') {
      this.renderedCourse = this.allCourses
    } else {
      this.renderedCourse = this.renderedCourse.filter((item) => item.title.toLowerCase().includes(this.searchValue.toLowerCase()) || item.description.toLowerCase().includes(this.searchValue.toLowerCase()))
    }
  }
}
