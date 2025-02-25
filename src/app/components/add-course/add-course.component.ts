import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Courses } from 'src/app/interface/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  addCourse: Courses | null = null

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  get courseName() {
    return this.addCourseForm.get('courseName')
  }

  get courseType() {
    return this.addCourseForm.get('courseType')
  }

  get courseDescription() {
    return this.addCourseForm.get('courseDescription')
  }

  get courseImg() {
    return this.addCourseForm.get('courseImg')
  }

  constructor(private fb: FormBuilder, private courses: CoursesService, private router: Router) { }

  addCourseForm = this.fb.group({
    courseName: ['', [Validators.required, Validators.minLength(3)]],
    courseType: ['', [Validators.required]],
    courseDescription: ['', [Validators.required, Validators.minLength(3)]],
    courseImg: ['', [Validators.required]]
  })


  //  create course 
  createCourse(addCourse: Courses): void {
    this.courses.createCourse(addCourse).subscribe(
      (res) => {
        // console.log(res)
      },
      (err) => console.log(err),
      () => {
        alert('Course is added');
        this.router.navigateByUrl('/allAddedCourses')
      }
    )
  }

  onSubmit() {
    this.addCourse = {
      title: this.addCourseForm.value.courseName || '',
      description: this.addCourseForm.value.courseDescription || '',
      image: this.addCourseForm.value.courseImg || '',
      type: this.addCourseForm.value.courseType || ''
    }
    this.createCourse(this.addCourse)

  }
}
