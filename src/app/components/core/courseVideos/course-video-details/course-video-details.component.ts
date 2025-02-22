import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-course-video-details',
  templateUrl: './course-video-details.component.html',
  styleUrls: ['./course-video-details.component.css']
})
export class CourseVideoDetailsComponent {

  @Input() title:string=''
  @Input() videoNo:string=''
}
