import { Component, OnInit, Input } from '@angular/core';

import { News } from '../../news';
import { NewsService } from '../../news.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: News[];

  @Input() articleType = 1;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService
      .fetch(this.articleType)
      .subscribe((news: News[]) => (this.newsList = news));
  }
}
