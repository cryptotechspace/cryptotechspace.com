import { Subreddit } from './subreddit';
import { RedditUser } from './reddit.user';

export interface RedditPost {
    id: number;
    postId: string;
    subreddit: Subreddit;
    author: RedditUser;
    creationDate;
    title: string;
    url: string;
}
