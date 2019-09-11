import { VideoSource } from './videoSource';

export interface Video {
    id: number;
    extRefId: string;
    source: VideoSource;
    title: string;
    description: string;
    url: string;
    publishingDate;
    publisherName: string;
    publisherUrl: string;
    thumbnailUrl: string;
}
