import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from './tweet';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class TweetService {



    constructor(private http: HttpClient) {

    }

    fetchTweets(): Observable<Tweet[]> {
        return this.http.get<Tweet[]>(`${environment.serverURL}tweet`);
    }

}
