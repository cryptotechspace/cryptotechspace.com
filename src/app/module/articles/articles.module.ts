import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NewsModule } from '../news/news.module';

@NgModule({
    declarations: [ArticlesComponent],
    imports: [CommonModule, HttpClientModule, NewsModule]
})
export class ArticlesModule { }
