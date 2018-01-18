import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

  constructor(
    private http: HttpClient,
  ) { }

  getUrl(path: string): string {
    return 'http://localhost:8000/api/v1/' + path;
  }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(this.getUrl('articles/' + id));
  }

  getArticles(dictionary_id: number): Observable<Article[]> {
    return this.http.get<Article[]>(this.getUrl('dictionaries/' + dictionary_id + '/articles'));
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.getUrl('dictionaries/' + article.dictionary_id + '/articles'), article);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(this.getUrl('articles/' + article.id), article);
  }

  deleteArticle(article: Article): Observable<Object> {
    return this.http.delete(this.getUrl('articles/' + article.id));
  }
}
