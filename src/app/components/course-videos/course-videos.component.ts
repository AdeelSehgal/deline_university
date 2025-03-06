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
  loader: boolean = true

  constructor(private activatedRoute: ActivatedRoute, private videos: VideosService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.courseId = parseInt(params.get('id') || '')
    })

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
      (err) => {
        console.log(err)
        if (err.error.message === 'videos not found') {
          this.allVideos = []
        }
        this.loader = false
        setTimeout(() => {
          alert(err.error.message || 'something wrong happen')
        }, 100);
      },
      () => this.loader = false
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
          (err) => {
            console.log(err)
            alert(err.error.message || 'something wrong happen')
          },
          () => {
            if (this.courseId) {
              this.getcourseVideos(this.courseId)
            }
          }
        )
      } else {
        return
      }
    }
  }
}
