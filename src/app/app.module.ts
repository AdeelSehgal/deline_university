import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from'@angular/common/http' // for api integration we use http client module in app.module and then use it in imports array
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HeroSectionComponent } from './components/core/home/hero-section/hero-section.component';
import { ButtonComponent } from './../app/components/common/button/button.component';
import { BarHeadingComponent } from './../app/components/common/bar-heading/bar-heading.component';
import { ChooseUsSectionComponent } from './components/core/home/choose-us-section/choose-us-section.component';
import { ChooseUsCardComponent } from './components/common/choose-us-card/choose-us-card.component';
import { CoursesSectionComponent } from './components/core/home/courses-section/courses-section.component';
import { CourseCardComponent } from './components/common/course-card/course-card.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CallToActionComponent } from './components/core/home/call-to-action/call-to-action.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/core/course-details/course-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AddCourseVideoComponent } from './components/add-course-video/add-course-video.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AllAddedCoursesComponent } from './components/all-added-courses/all-added-courses.component';
import { CourseVideosComponent } from './components/course-videos/course-videos.component';
import { CourseVideoDetailsComponent } from './components/core/courseVideos/course-video-details/course-video-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    ButtonComponent,
    BarHeadingComponent,
    ChooseUsSectionComponent,
    ChooseUsCardComponent,
    CoursesSectionComponent,
    CourseCardComponent,
    FooterComponent,
    CallToActionComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CourseComponent,
    CourseDetailsComponent,
    ErrorPageComponent,
    AddCourseVideoComponent,
    AddCourseComponent,
    AllAddedCoursesComponent,
    CourseVideosComponent,
    CourseVideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
