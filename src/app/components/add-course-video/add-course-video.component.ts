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
  videoId: number | null = null
  courseId: string | null = null

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getCourses()
    this.activatedroute.queryParamMap.subscribe((params) => {
      this.videoId = parseInt(params.get('videoId') || '')
      const title = params.get('title')
      const link = params.get('link')
      this.courseId = params.get('CourseId')

      if (this.videoId && title && link && this.courseId) {
        const updateVideo = {
          selectedCourse: this.courseId,
          videoTitle: title,
          videoLink: link,
        }
        this.addCourseVideoForm.setValue(updateVideo)
        this.isUpdate = true
      }
    })
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

  // update video
  updateVideo(updatedVideo: Videos, id: number): void {
    this.videos.updateVideo(updatedVideo, id).subscribe(
      (res) => {
      },
      (err) => console.log(err),
      () => {
        alert('Video is updated.');
        this.router.navigateByUrl(`/courseVideos/${this.courseId}`)
      }
    )
  }

  onSubmit() {
    const addvideo = {
      title: this.addCourseVideoForm.value.videoTitle || '',
      link: this.addCourseVideoForm.value.videoLink || '',
      // courseId: parseInt(this.addCourseVideoForm.value.selectedCourse || '')
      courseId: this.addCourseVideoForm.value.selectedCourse || ''
    }

    if (this.isUpdate && this.videoId) {
      this.updateVideo(addvideo, this.videoId)
    } else {
      this.createVideo(addvideo)
    }
  }
}
