import { Component, Input } from '@angular/core';
import { Videos } from 'src/app/interface/videos';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-course-video-details',
  templateUrl: './course-video-details.component.html',
  styleUrls: ['./course-video-details.component.css']
})
export class CourseVideoDetailsComponent {

  constructor(private videos: VideosService) { }


  // deleteCourse(videoId: number | null): void {
  //   if (videoId) {
  //     const confirmDelete = confirm('Are you sure to delete video')
  //     if (confirmDelete) {
  //       this.videos.deleteVideo(videoId).subscribe(
  //         (res) => {
  //           console.log(res)
  //         },
  //         (err) => console.log(err),
  //         () => { this.getCourses() }
  //       )
  //     } else {
  //       return
  //     }

  //   } else {
  //     alert('Course id is required')
  //   }
  // }


  // getcourseVideos(id: number): void {
  //   this.videos.getCourseVideos(id).subscribe(
  //     (res) => {
  //       this.allVideos = res;
  //       console.log(this.allVideos)
  //     },
  //     (err) => console.log(err),
  //   )
  // }


  @Input() title: string = ''
  @Input() videoId: number | null = null
  @Input() videoNo: number = 0
}
