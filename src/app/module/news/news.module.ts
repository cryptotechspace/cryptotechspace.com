import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './component/news-detail/news-detail.component';
import { NewsListComponent } from './component/news-list/news-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesModule } from '../articles/articles.module';
import { PipesModule } from 'src/app/component/pipes/pipes.module';


@NgModule({
    imports: [CommonModule, HttpClientModule, ArticlesModule, PipesModule],
    declarations: [NewsComponent, NewsDetailComponent, NewsListComponent],
    exports: [NewsListComponent, NewsDetailComponent]
})
export class NewsModule {

}
