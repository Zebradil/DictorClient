import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from './article';
import { ARTICLES } from './mock-articles';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticle(id: number): Observable<Article> {
    return of(ARTICLES.find(article => article.id === id));
  }

  getAllArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

  getArticles(id: number): Observable<Article[]> {
    return of(ARTICLES.filter(article => article.dictionary_id === id));
  }
}
