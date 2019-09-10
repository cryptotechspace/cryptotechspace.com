import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../article';


@Component(
    {
        selector: 'app-article-detail',
        templateUrl: './article.detail.component.html',
        styleUrls: ['./article.detail.component.css']
    }
)
export class ArticleDetailComponent {

    @Input() article: Article;


}
