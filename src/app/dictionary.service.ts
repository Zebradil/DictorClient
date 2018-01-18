import { Injectable } from '@angular/core';
import { Dictionary } from './dictionary';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DictionaryService {

  constructor(
    private http: HttpClient,
  ) { }

  getUrl(path: string): string {
    return 'http://localhost:8000/api/v1/' + path;
  }

  getDictionaries(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(this.getUrl('dictionaries'));
  }

  getDictionary(id: number): Observable<Dictionary> {
    return this.http.get<Dictionary>(this.getUrl('dictionaries/' + id));
  }

  createDictionary(dictionary: Dictionary): Observable<Dictionary> {
    return this.http.post<Dictionary>(this.getUrl('dictionaries'), dictionary);
  }

  updateDictionary(dictionary: Dictionary): Observable<Dictionary> {
    return this.http.put<Dictionary>(this.getUrl('dictionaries/' + dictionary.id), dictionary);
  }

  deleteDictionary(dictionary: Dictionary): Observable<Object> {
    return this.http.delete(this.getUrl('dictionaries/' + dictionary.id));
  }
}
