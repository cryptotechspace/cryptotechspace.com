import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { VideosService } from './videos.service';

@Component({
    selector: 'app-videos',
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

    videos: Video[];

    constructor(private videosService: VideosService) { }

    ngOnInit(): void {
        this.videosService.fetchVideos().subscribe(fetchedVideos => this.videos = fetchedVideos);
    }

}
