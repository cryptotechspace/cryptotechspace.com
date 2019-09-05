import { NgModule } from '@angular/core';
import { NewsComponent } from './news.component';
import { NewsDetailComponent } from './component/news-detail/news-detail.component';
import { NewsListComponent } from './component/news-list/news-list.component';
import { NewsService } from './news.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [NewsComponent, NewsDetailComponent, NewsListComponent],
    providers: [NewsService],
    exports: [NewsListComponent, NewsDetailComponent]
})
export class NewsModule {

}
