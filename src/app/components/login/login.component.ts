import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/interface/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordView: boolean = false
  temprary: string = 'test@gamil.com' // use is html template

  constructor(private fb: FormBuilder, private route: Router, private users: UsersService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
  })

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  viewPassword() {
    this.passwordView = !this.passwordView
  }

  //  login user 
  loginUser(user: LoginUser): void {
    this.users.loginUser(user).subscribe(
      (res) => {
        if (res.message === 'user is login') {
          localStorage.setItem('token', res.token)
          localStorage.setItem('userType', res.userType)
          alert('Login successful');
          this.route.navigateByUrl('/')
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
  }

  onSubmit() {
    const loginUser = {
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || '',
    }
    this.loginUser(loginUser)
  }
}
