import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from './tweet';


const tweetsURI = 'http://40.89.173.66:8080/tweet/';


@Injectable({ providedIn: 'root' })
export class TweetService {



    constructor(private http: HttpClient) {

    }

    fetchTweets(): Observable<Tweet[]> {
        return this.http.get<Tweet[]>(tweetsURI);
    }

}
