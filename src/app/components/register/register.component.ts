import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

type User={
email:string,
 password:string,
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  passwordView: boolean = false
  confirmPasswordView: boolean = false
  temprary: string = 'test@gamil.com'
  users: User[] = []  
  registerEmail: string = ''
  registerPassword: string = ''

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  get userName() {
    return this.registrationForm.get('userName')
  }

  get email() {
    return this.registrationForm.get('email')
  }

  get password() {
    return this.registrationForm.get('password')
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword')
  }

  constructor(private fb: FormBuilder, private route: Router) { }

  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]]
  }, {
    validators: this.passwordValidator('password', 'confirmPassword')
  })


  passwordValidator(password: string, confirmPassword: string) {
    return (FormGroup: FormGroup) => {
      const passwordControl = FormGroup.controls[password]
      const confirmPasswordControl = FormGroup.controls[confirmPassword]
      if (confirmPasswordControl.errors && confirmPasswordControl.errors['passwordValidator']) {
        return
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ misMatch: true })
      }
      else {
        confirmPasswordControl.setErrors(null)
      }

    }
  }

  viewPassword() {
    this.passwordView = !this.passwordView
  }

  viewConfirmPassword() {
    this.confirmPasswordView = !this.confirmPasswordView
  }

  onSubmit() {
    console.log(this.registrationForm.value)
    this.registerEmail = this.registrationForm.value.email
    this.registerPassword = this.registrationForm.value.password

    this.users?.push({ email: this.registrationForm.value.email, password: this.registrationForm.value.password })

    // this.users?.push(this.registrationForm.value)
    // console.log(this.users)

    localStorage.setItem('users', JSON.stringify(this.users))
    alert("Successfully Register")
    
    setTimeout(() => {
      this.route.navigateByUrl('login')
    }, 1000);
  }
}
