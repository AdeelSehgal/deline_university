import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import httpclient 
import { Observable } from 'rxjs';
import { Videos } from '../interface/videos';
import { environment } from 'src/environments/environment.development';
@Injectable({
    providedIn: 'root'
})
export class VideosService {

    constructor(private http: HttpClient) { }
    apiUrl = environment.url

    // get all Videos
    getVideos(): Observable<Videos[]> {
        return this.http.get<Videos[]>(`${this.apiUrl}/api/videos`)
    }

    // get all Videos
    getCourseVideos(id: number): Observable<Videos[]> {
        return this.http.get<Videos[]>(`${this.apiUrl}/api/videos/courseVideos/${id}`)
    }

    // get single Video
    getSingleVideo(id: number): Observable<Videos[]> {
        return this.http.get<Videos[]>(`${this.apiUrl}/api/videos/${id}`)
    }

    // create Video
    createVideo(Video: Videos): Observable<Videos[]> {
        return this.http.post<Videos[]>(`${this.apiUrl}/api/videos`, Video)
    }

    // update Video
    updateVideo(Video: Videos, id: number): Observable<Videos[]> {
        return this.http.put<Videos[]>(`${this.apiUrl}/api/videos/${id}`, Video)
    }

    // delete Video
    deleteVideo(id: number): Observable<Videos[]> {
        return this.http.delete<Videos[]>(`${this.apiUrl}/api/videos/${id}`)
    }
}
