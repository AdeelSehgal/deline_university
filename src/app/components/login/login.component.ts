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
        localStorage.setItem('token', res.token)
        localStorage.setItem('userType', res.userType)
      },
      (err) => {
        console.log(err.response);
        if (err.status === 404) { alert('Invalid password or email') }
      },
      () => {
        alert('Login successful');
        this.route.navigateByUrl('/')
      }
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
