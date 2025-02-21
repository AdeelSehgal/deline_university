import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-choose-us-card',
  templateUrl: './choose-us-card.component.html',
  styleUrls: ['./choose-us-card.component.css']
})
export class ChooseUsCardComponent {

  @Input() heading:string=''
  @Input()  paragraph:string=''
  @Input()  iconBg:string=''
  


}
