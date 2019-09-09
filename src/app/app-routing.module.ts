import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './module/news/news.component';
import { ArticlesComponent } from './module/articles/articles.component';
import { TweetsComponent } from './module/tweets/tweets.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'tweets', component: TweetsComponent },
  { path: '', redirectTo: 'news', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
