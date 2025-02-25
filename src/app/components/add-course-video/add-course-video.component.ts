import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course-video',
  templateUrl: './add-course-video.component.html',
  styleUrls: ['./add-course-video.component.css']
})
export class AddCourseVideoComponent {


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  get selectedCourse() {
    return this.addCourseVideoForm.get('selectedCourse')
  }

  get videoTitle() {
    return this.addCourseVideoForm.get('videoTitle')
  }

  get videoLink() {
    return this.addCourseVideoForm.get('videoLink')
  }

  constructor(private fb: FormBuilder) { }

  addCourseVideoForm = this.fb.group({
    selectedCourse: ['', [Validators.required]],
    videoTitle: ['', [Validators.required, Validators.minLength(3)]],
    videoLink: ['', [Validators.required]]
  })

  onSubmit() {
    console.log(this.addCourseVideoForm.value)
  }
}
