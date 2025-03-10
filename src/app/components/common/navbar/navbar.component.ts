import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
  isUserLogin: boolean = false
  isAdmin: boolean = false

  constructor(private router: Router, private users: UsersService) { }
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
      // i am sending empty object as post need payload
      this.users.logoutUser({}).subscribe(
        (res) => {
          if (res.message === 'user is logout') {
            localStorage.removeItem('token')
            localStorage.removeItem('userType')
            this.router.navigateByUrl('')
          }
          else {
            alert(res);
            console.log(res)
          }
        },
        (err) => {
          console.log(err)
          alert(err.error.message || 'something went wrong')
        },
      )
    } else {
      return
    }
  }
}
