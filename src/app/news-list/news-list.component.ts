import { Component, OnInit } from "@angular/core";

import { News } from "../news";
import { NewsService } from "../news.service";

import { Observable } from "rxjs";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit {
  newsList: News[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService
      .fetchNews()
      .subscribe((news: News[]) => (this.newsList = news));
  }
}
