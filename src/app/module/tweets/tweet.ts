import { TwitterUser } from './twitterUser';

export interface Tweet {
    tweetId: number;
    publisher: TwitterUser;
    createdAt;
    text: string;
    url: string;
}
