import { Injectable } from '@angular/core';

import { Article } from './article';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ArticlesService {
    constructor(private http: HttpClient) { }

    fetch(articleType: number): Observable<Article[]> {

        return this.http.get<Article[]>(`${environment.serverURL}articles/${articleType}`);
    }

}
