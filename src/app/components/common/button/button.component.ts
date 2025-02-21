import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() text: string = ''
  @Input() bgColor: string = ''
  @Input() textColor: string = ''
  @Input() sizefull: boolean=false
}
