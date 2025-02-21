import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-heading',
  templateUrl: './bar-heading.component.html',
  styleUrls: ['./bar-heading.component.css']
})
export class BarHeadingComponent {

  @Input() text: string = ''
  @Input() bgColor: string = ''
  @Input() textColor: string = ''

}
