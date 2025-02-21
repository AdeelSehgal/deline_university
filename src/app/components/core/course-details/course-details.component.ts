import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {

  @Input() title: string = ''
  @Input() duration: string = ''
  @Input() videoNo: string = ''
  @Input() selectedVideo: SafeResourceUrl = ''
  @Input() videoLink: string = ''
}
