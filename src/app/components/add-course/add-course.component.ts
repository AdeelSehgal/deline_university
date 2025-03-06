import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from 'src/app/interface/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addCourse: Courses | null = null
  courseId: number | null = null
  isUpdate: boolean = false

  constructor(private fb: FormBuilder, private courses: CoursesService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.activatedroute.queryParamMap.subscribe((params) => {
      this.courseId = parseInt(params.get('courseId') || '')
      const name = params.get('name')
      const type = params.get('type')
      const description = params.get('description')
      const image = params.get('image')

      if (this.courseId && name && type && description && image) {
        const updateCourse = {
          courseName: name,
          courseType: type,
          courseDescription: description,
          courseImg: image
        }
        this.addCourseForm.setValue(updateCourse)
        this.isUpdate = true
      }

    })
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
      (err) => {
        console.log(err);
        alert(err.error.message || 'something wrong happen')
      },
      () => {
        alert('Successfully add course. Now you can add videos to your course');
        this.router.navigateByUrl('/allAddedCourses')
      }
    )
  }

  // update course
  updateCourse(updatedCourse: Courses, id: number): void {
    this.courses.updateCourse(updatedCourse, id).subscribe(
      (res) => {
      },
      (err) => {
        console.log(err);
        alert(err.error.message || 'something wrong happen')
      },
      () => {
        alert('Course is updated.');
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
    if (this.isUpdate && this.courseId) {
      this.updateCourse(this.addCourse, this.courseId)
    } else {
      this.createCourse(this.addCourse)
    }
  }
}
