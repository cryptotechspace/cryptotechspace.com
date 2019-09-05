import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './component/news-detail/news-detail.component';
import { NewsListComponent } from './component/news-list/news-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesModule } from '../articles/articles.module';


@NgModule({
    imports: [CommonModule, HttpClientModule, ArticlesModule],
    declarations: [NewsComponent, NewsDetailComponent, NewsListComponent],
    exports: [NewsListComponent, NewsDetailComponent]
})
export class NewsModule {

}
