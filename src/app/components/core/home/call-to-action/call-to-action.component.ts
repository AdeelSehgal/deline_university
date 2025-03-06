import { Component } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent {
  isUserLogin: boolean = false

  ngDoCheck(): void {
    const localData = localStorage.getItem('token')
    this.isUserLogin = localData ? true : false
  }

}
