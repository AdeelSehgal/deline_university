import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import httpclient 
import { Observable } from 'rxjs';
import { Courses } from '../interface/courses';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }
  apiUrl = environment.url

  // get all courses
  getCourses(): Observable<Courses[]> {
    return this.http.get<Courses[]>(`${this.apiUrl}/api/courses`)
  }

  // get single course
  getSingleCourses(id: number): Observable<Courses[]> {
    return this.http.get<Courses[]>(`${this.apiUrl}//api/courses/${id}`)
  }

  // create course
  createCourse(course: Courses): Observable<Courses[]> {
    return this.http.post<Courses[]>(`${this.apiUrl}/api/courses`, course)
  }

  // update course
  updateCourse(course: Courses, id: number): Observable<Courses[]> {
    return this.http.put<Courses[]>(`${this.apiUrl}/api/courses/${id}`, course)
  }

  // delete course
  deleteCourse(id: number): Observable<Courses[]> {
    return this.http.delete<Courses[]>(`${this.apiUrl}/api/courses/${id}`)
  }
}
