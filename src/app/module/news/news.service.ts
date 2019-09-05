import { Injectable } from '@angular/core';

import { News } from './news';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const articlesURI = 'http://40.89.173.66:8080/articles/';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  fetch(articleType: number): Observable<News[]> {
    return this.http.get<News[]>(`${articlesURI}${articleType}`);
  }

}
