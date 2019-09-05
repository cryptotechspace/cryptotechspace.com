import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './module/news/news.component';
import { NewsModule } from './module/news/news.module';
import { ArticlesModule } from './module/articles/articles.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, NewsModule, ArticlesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
