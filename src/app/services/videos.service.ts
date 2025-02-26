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
    apiUrl = environment.videos

    // get all Videos
    getVideos(): Observable<Videos[]> {
        return this.http.get<Videos[]>(`${this.apiUrl}`)
    }

    // get all Videos
    getCourseVideos(id: number): Observable<Videos[]> {
        return this.http.get<Videos[]>(`${this.apiUrl}/courseVideos/${id}`)
    }

    // get single Video
    getSingleVideo(id: number): Observable<Videos[]> {
        return this.http.get<Videos[]>(`${this.apiUrl}/${id}`)
    }

    // create Video
    createVideo(Video: Videos): Observable<Videos[]> {
        return this.http.post<Videos[]>(`${this.apiUrl}`, Video)
    }

    // update Video
    updateVideo(Video: Videos, id: number): Observable<Videos[]> {
        return this.http.put<Videos[]>(`${this.apiUrl}/${id}`, Video)
    }

    // delete Video
    deleteVideo(id: number): Observable<Videos[]> {
        return this.http.delete<Videos[]>(`${this.apiUrl}/${id}`)
    }
}
