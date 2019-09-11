import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from './video';


const videosURI = 'http://40.89.173.66:8080/video/';

@Injectable({ providedIn: 'root' })
export class VideosService {

    constructor(private http: HttpClient) { }

    fetchVideos(): Observable<Video[]> {
        return this.http.get<Video[]>(videosURI);
    }
}



