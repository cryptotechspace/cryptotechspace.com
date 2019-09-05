import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticlesService } from './articles.service';

@Component({
    selector: 'app-articles',
    styleUrls: ['./articles.component.css'],
    templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {
    articles: Article[];

    private articleType = 2;

    constructor(private articleService: ArticlesService) { }

    ngOnInit() {
        this.articleService
            .fetch(this.articleType)
            .subscribe((articles: Article[]) => (this.articles = articles));
    }


}
