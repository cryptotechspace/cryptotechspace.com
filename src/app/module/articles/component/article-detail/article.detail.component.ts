import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../article';


@Component(
    {
        selector: 'app-article-detail',
        templateUrl: './article.detail.component.html',
        styleUrls: ['./article.detail.component.css']
    }
)
export class ArticleDetailComponent implements OnInit {

    @Input() article: Article;

    ngOnInit() {
        this.article.newsDate =
            this.article.pubTime.dayOfMonth + ' ' +
            this.article.pubTime.month + ' ' +
            this.article.pubTime.year + ' ' +
            this.article.pubTime.hour + ':' +
            this.article.pubTime.minute;
    }

}
