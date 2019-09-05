import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/module/articles/article';



@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  @Input() news: Article;
  constructor() { }

  ngOnInit() {
    this.news.newsDate =
      this.news.pubTime.dayOfMonth + ' ' +
      this.news.pubTime.month + ' ' +
      this.news.pubTime.year + ' ' +
      this.news.pubTime.hour + ':' +
      this.news.pubTime.minute;
  }
}
