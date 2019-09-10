import { TwitterUser } from './twitterUser';

export interface Tweet {
    tweetId: number;
    publisher: TwitterUser;
    createdAt;
    tweetDate: string;
    text: string;
    url: string;
}
