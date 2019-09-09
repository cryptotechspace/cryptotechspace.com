import { Component, OnInit } from '@angular/core';
import { Tweet } from './tweet';
import { TweetService } from './tweets.service';

@Component({
    selector: 'app-tweets',
    templateUrl: './tweets.component.html',
    styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
    private tweets: Tweet[];

    constructor(private tweetService: TweetService) { }


    ngOnInit(): void {
        this.tweetService.fetchTweets().subscribe(tweets => {
            this.tweets = tweets;
        });
    }

}
