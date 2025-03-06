import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
  isUserLogin: boolean = false
  isAdmin: boolean = false

  constructor(private router: Router) { }
  // we have to write the code inside as it works at every chnage detection life cycle
  ngDoCheck(): void {
    const localData = localStorage.getItem('token')
    const userType = localStorage.getItem('userType')
    this.isAdmin = userType === 'admin' ? true : false
    this.isUserLogin = localData ? true : false
  }

  onLogOut() {
    const isLogout = confirm("Are you sure to logout")
    if (isLogout) {
      localStorage.removeItem('token')
      localStorage.removeItem('userType')
      this.router.navigateByUrl('')
    } else {
      return
    }
  }
}
