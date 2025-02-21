import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CourseComponent } from './components/course/course.component';
import { AuthGuard } from './guard/auth.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddCourseVideoComponent } from './components/add-course-video/add-course-video.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AllAddedCoursesComponent } from './components/all-added-courses/all-added-courses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'course/:id', component: CourseComponent, canActivate: [AuthGuard] },
  { path: 'addCourse', component: AddCourseComponent},
  { path: 'addCourseVideo', component: AddCourseVideoComponent},
  { path: 'allAddedCourses', component: AllAddedCoursesComponent},
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
