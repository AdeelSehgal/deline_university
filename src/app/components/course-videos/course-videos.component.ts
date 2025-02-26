import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videos } from 'src/app/interface/videos';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-course-videos',
  templateUrl: './course-videos.component.html',
  styleUrls: ['./course-videos.component.css']
})
export class CourseVideosComponent implements OnInit {

  courseId: number | null = null
  allVideos: Videos[] = []

  constructor(private activatedRoute: ActivatedRoute, private videos: VideosService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.courseId = parseInt(params.get('id') || '')
    })
    console.log(this.courseId)
    if (this.courseId) {
      this.getcourseVideos(this.courseId)
    }
  }

  // get course videos
  getcourseVideos(id: number): void {
    this.videos.getCourseVideos(id).subscribe(
      (res) => {
        this.allVideos = res;
      },
      (err) => console.log(err),
    )
  }


  // delete course video
  deleteCourseVideo(id: number | undefined): void {
    if (id) {
      const confirmDelete = confirm('Are you sure to delete video')
      if (confirmDelete) {
        this.videos.deleteVideo(id).subscribe(
          (res) => {
            console.log(res)
          },
          (err) => console.log(err),
          () => {
            if (this.courseId) {
              this.getcourseVideos(this.courseId)
            }
          }
        )
      } else {
        return
      }
    } else {
      alert('video id is required')
    }
  }
}
