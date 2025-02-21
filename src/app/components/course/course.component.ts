import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsService } from 'src/app/services/courseDetails.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  courseId: string | null = null
  routeobject: any
  courseDetails: any
  selectedVideo:string=''
  videoSrc: SafeResourceUrl=''

  constructor(private activatedRoute: ActivatedRoute, private courses: CourseDetailsService,private sanitizer:DomSanitizer) { }
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.routeobject = this.activatedRoute.paramMap.subscribe((param) => {
      this.courseId = param.get('id')
      this.courseDetails = this.courses.courses.find(x => x.id === this.courseId)?.details
      this.videoSrc=this.sanitizer.bypassSecurityTrustResourceUrl(this.courseDetails[0].link)
      this.selectedVideo=this.courseDetails[0].link
    })
  }

  onClick(videoLink: string) {
    console.log(videoLink)
    this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(videoLink);
    this.selectedVideo=videoLink
  }

  ngOnDestroy(): void {
    this.routeobject.unsubscribe()
  }
}
