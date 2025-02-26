import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses.service';
import { Courses } from 'src/app/interface/courses';
import { Videos } from 'src/app/interface/videos';
import { VideosService } from 'src/app/services/videos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-course-video',
  templateUrl: './add-course-video.component.html',
  styleUrls: ['./add-course-video.component.css']
})
export class AddCourseVideoComponent {

  allCourses: Courses[] = []
  isUpdate: boolean = false

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getCourses()
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

  constructor(private fb: FormBuilder, private courses: CoursesService, private videos: VideosService, private router: Router, private activatedroute: ActivatedRoute) { }

  addCourseVideoForm = this.fb.group({
    selectedCourse: ['', [Validators.required]],
    videoTitle: ['', [Validators.required, Validators.minLength(3)]],
    videoLink: ['', [Validators.required]]
  })


  // get all courses
  getCourses(): void {
    this.courses.getCourses().subscribe(
      (res) => {
        this.allCourses = res;
        console.log(this.allCourses)
      },
      (err) => console.log(err),
    )
  }


  //  create video 
  createVideo(addVideo: Videos): void {
    this.videos.createVideo(addVideo).subscribe(
      (res) => {
        // console.log(res)
      },
      (err) => console.log(err),
      () => {
        alert('Successfully add video');
        this.router.navigateByUrl(`/courseVideos/${this.addCourseVideoForm.value.selectedCourse}`)
      }
    )
  }


  onSubmit() {
    const addvideo = {
      title: this.addCourseVideoForm.value.videoTitle || '',
      link: this.addCourseVideoForm.value.videoLink || '',
      CourseId: parseInt(this.addCourseVideoForm.value.selectedCourse || '')

    }

    this.createVideo(addvideo)

  }
}
