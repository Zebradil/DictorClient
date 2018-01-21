import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Cacher } from './cache';
import { share, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseResourceService<T> {

  cacher: Cacher = new Cacher();

  constructor(
    protected http: HttpClient,
  ) { }

  getItems(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  getItem(url: string, key: string): Observable<T> {
    if (this.cacher.has(key)) {
      return this.cacher.get(key);
    } else {
      const observable = this.http.get<T>(url)
        .pipe(tap(res => this.cacher.setData(key, res)))
        .pipe(share());
      this.cacher.setObservable(key, observable);
      return observable;
    }
  }

  createItem(url: string, item: T, getKey: (T) => string): Observable<T> {
    return this.http.post<T>(url, item)
      .pipe(tap(res => this.cacher.setData(getKey(res), res)));
  }

  updateItem(url: string, item: T, key: string): Observable<T> {
    const observable = this.http.put<T>(url, item)
      .pipe(tap(res => this.cacher.setData(key, res)))
      .pipe(share());
    this.cacher.setObservable(key, observable);
    return observable;
  }

  deleteItem(url: string, key: string): Observable<Object> {
    return this.http.delete(url)
      .pipe(tap(res => this.cacher.del(key)));
  }
}
