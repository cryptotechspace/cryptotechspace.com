import { Component, OnInit } from '@angular/core';
import { RedditPost } from './reddit.post';
import { RedditService } from './reddit.sevice';

@Component({
    selector: 'app-reddit',
    styleUrls: ['./reddit.component.css'],
    templateUrl: './reddit.component.html'
})
export class RedditComponent implements OnInit {


    posts: RedditPost[];

    constructor(private redditSvc: RedditService) { }

    ngOnInit(): void {
        this.redditSvc.fetchRedditPosts().subscribe(fetchedPosts => this.posts = fetchedPosts);
    }

}
