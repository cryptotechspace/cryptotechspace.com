import { Injectable } from '@angular/core';

import { Article } from './article';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

const articlesURI = 'http://40.89.173.66:8080/articles/';

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {
    constructor(private http: HttpClient) { }

    fetch(articleType: number): Observable<Article[]> {
        return this.http.get<Article[]>(`${articlesURI}${articleType}`);
    }

}
