import { Injectable } from '@angular/core';

import { RedditPost } from './reddit.post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class RedditService {

    constructor(private http: HttpClient) { }

    fetchRedditPosts(): Observable<RedditPost[]> {
        return this.http.get<RedditPost[]>(`${environment.serverURL}redditPosts/`);
    }

}
