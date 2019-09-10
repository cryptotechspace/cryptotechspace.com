import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/module/articles/article';



@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent {
  @Input() news: Article;
  constructor() { }

}
