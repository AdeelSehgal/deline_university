import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Courses } from 'src/app/interface/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit, OnDestroy {

  searchValue: string = ''
  loader: boolean = true
  allCourses: Courses[] = []
  renderedCourse: Courses[] = []
  isFilter: boolean = false
  dataSubscription: Subscription | undefined
  constructor(private courses: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.allCourses = []
    this.renderedCourse = []
    this.getCourses()
  }

  // get all courses
  getCourses(): void {
    this.dataSubscription = this.courses.getCourses().subscribe(
      (res) => {
        this.allCourses = res;
        this.renderedCourse = res
      },
      (err) => console.log(err),
      () => {
        console.log('done getting courses')
        this.loader = false
      }
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

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe()
  }
}
