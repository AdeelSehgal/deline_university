import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input() title:string=''
  @Input() des:string=''
  @Input() image:string=''
}
