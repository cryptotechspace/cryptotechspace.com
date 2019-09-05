import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsModule } from '../news/news.module';
import { ArticlesService } from './articles.service';
import { ArticleDetailComponent } from './component/article-detail/article.detail.component';

@NgModule({
    declarations: [ArticlesComponent, ArticleDetailComponent],
    imports: [CommonModule, HttpClientModule],
    providers: [ArticlesService]
})
export class ArticlesModule { }
