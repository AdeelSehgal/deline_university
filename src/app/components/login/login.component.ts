import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type User = {
  email: string,
  password: string,
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordView: boolean = false
  temprary: string = 'test@gamil.com'
  registerUsers: User[] = []

  constructor(private fb: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    const localData = localStorage.getItem('users')
    if (localData) {
      this.registerUsers = JSON.parse(localData)
    }
    console.log(this.registerUsers)
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

  onSubmit() {
    console.log(this.loginForm)
    const isUserExist = this.registerUsers.find((u) => u.email === this.loginForm.value.email && u.password === this.loginForm.value.password)

    if (isUserExist) {
      alert('Successfully login')
      localStorage.setItem('token', '123456789')
      setTimeout(() => {
        this.route.navigateByUrl('home')
      }, 1000);
    } else {
      alert('invalid credentials')
    }
  }
}
