import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  get courseName() {
    return this.addCourseForm.get('courseName')
  }

  get courseDescription() {
    return this.addCourseForm.get('courseDescription')
  }

  get courseImg() {
    return this.addCourseForm.get('courseImg')
  }

  constructor(private fb: FormBuilder) { }

  addCourseForm = this.fb.group({
    courseName: ['', [Validators.required, Validators.minLength(3)]],
    courseDescription: ['', [Validators.required, Validators.minLength(3)]],
    courseImg: ['', [Validators.required]]
  })

  onSubmit() {
    console.log(this.addCourseForm.value)
  }
}
