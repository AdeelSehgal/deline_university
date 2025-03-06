import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { CourseDetailsService } from 'src/app/services/courseDetails.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideosService } from 'src/app/services/videos.service';
import { Videos } from 'src/app/interface/videos';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  courseId: number | null = null
  routeobject: any
  courseVideos: Videos[] = []
  selectedVideo: string = ''
  videoSrc: SafeResourceUrl = ''
  loader:boolean=true

  constructor(private activatedRoute: ActivatedRoute, private videos: VideosService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.routeobject = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = parseInt(param.get('id') || '')
      if (this.courseId) {
        this.getcourseVideos(this.courseId)
      }
    })
  }

  onClick(videoLink: string) {
    console.log(videoLink)
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(videoLink);
    this.selectedVideo = videoLink
  }


  // get course videos
  getcourseVideos(id: number): void {
    this.videos.getCourseVideos(id).subscribe(
      (res) => {
        this.courseVideos = res;
        this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseVideos[0].link)
        this.selectedVideo = this.courseVideos[0].link
        this.loader=false
      },
      (err) => console.log(err),
    )
  }


  ngOnDestroy(): void {
    this.routeobject.unsubscribe()
  }
}
