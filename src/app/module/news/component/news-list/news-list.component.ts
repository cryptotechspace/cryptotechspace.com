import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/module/articles/article';
import { ArticlesService } from 'src/app/module/articles/articles.service';




@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsList: Article[];

  private articleType = 1;

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.articleService
      .fetch(this.articleType)
      .subscribe((news: Article[]) => (this.newsList = news));
  }
}
