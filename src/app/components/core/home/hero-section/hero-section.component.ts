import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements DoCheck {
  isUserLogin: boolean = false

  ngDoCheck(): void {
    const localData = localStorage.getItem('token')
    this.isUserLogin = localData ? true : false
  }

}
