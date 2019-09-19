import { Injectable } from '@angular/core';

import { RedditPost } from './reddit.post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const redditURI = 'http://40.89.173.66:8080/redditPosts/';

@Injectable({ providedIn: 'root' })
export class RedditService {

    constructor(private http: HttpClient) { }

    fetchRedditPosts(): Observable<RedditPost[]> {
        return this.http.get<RedditPost[]>(redditURI);
    }

}
