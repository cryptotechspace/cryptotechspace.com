import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsModule } from './module/news/news.module';
import { ArticlesModule } from './module/articles/articles.module';
import { TweetsModule } from './module/tweets/tweets.module';
import { VideosModule } from './module/videos/videos.module';
import { RedditModule } from './module/reddit/reddit.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, NewsModule, ArticlesModule, TweetsModule, VideosModule, RedditModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
