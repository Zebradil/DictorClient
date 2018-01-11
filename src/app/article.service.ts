import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Article } from './article';
import { ARTICLES } from './mock-articles';
import { of } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators';

function getMaxId(collection: Article[]): number {
  return collection
    ? collection.reduce((prev, curr) => prev.id < curr.id ? curr : prev).id
    : 0;
}

@Injectable()
export class ArticleService {

  constructor() { }

  getArticle(id: number): Observable<Article> {
    return of(ARTICLES.find(article => article.id === id));
  }

  getAllArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

  getArticles(dictionary_id: number): Observable<Article[]> {
    return of(ARTICLES.filter(article => article.dictionary_id === dictionary_id));
  }

  createArticle(article: Article): Observable<Article> {
    article.id = getMaxId(ARTICLES) + 1;
    ARTICLES.push(article);
    return of(article);
  }

  updateArticle(article: Article): Observable<Article> {
    return this.getArticle(article.id)
      .pipe(switchMap((oldArticle: Article, i: number) => {
        return of(Object.assign(oldArticle, article));
      }));
  }
}
