import { Injectable } from "@angular/core";

import { News } from "./news";

import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

const newsURI = "http://localhost:8080/articles";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  fetchNews(): Observable<News[]> {
    return this.http.get<News[]>(newsURI);
  }
}
