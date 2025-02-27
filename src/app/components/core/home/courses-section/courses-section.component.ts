import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/interface/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit {

  searchValue: string = ''
  allCourses: Courses[] = []
  renderedCourse: Courses[] = []
  isFilter: boolean = false
  constructor(private courses: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.allCourses = []
    this.renderedCourse = []
    this.getCourses()
  }

  // get all courses
  getCourses(): void {
    this.courses.getCourses().subscribe(
      (res) => {
        this.allCourses = res;
        this.renderedCourse = res
      },
      (err) => console.log(err),
      // ()=>console.log('done getting courses')
    )
  }

  onClick(id: number) {
    this.router.navigateByUrl('course/' + id)
  }

  searchInput(event: Event) {
    this.searchValue = (<HTMLInputElement>event.target).value
  }

  onFilter(filterValue: string) {
    this.renderedCourse = this.allCourses.filter((item) => item.type === filterValue)
    this.isFilter = true
  }

  onSearch() {
    if (this.searchValue === '') {
      this.renderedCourse = this.allCourses
    } else {
      this.renderedCourse = this.renderedCourse.filter((item) => item.title.toLowerCase().includes(this.searchValue.toLowerCase()) || item.description.toLowerCase().includes(this.searchValue.toLowerCase()))
    }
  }


  clearFilter() {
    this.renderedCourse = this.allCourses
    this.isFilter = false
  }
}
