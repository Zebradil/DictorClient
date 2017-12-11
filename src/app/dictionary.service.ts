import { Injectable } from '@angular/core';
import { Dictionary } from './dictionary';
import { DICTIONARIES } from './mock-dictionaries';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DictionaryService {

  constructor() { }

  getDictionaries(): Observable<Dictionary[]> {
    return of(DICTIONARIES);
  }

  getDictionary(id: number): Observable<Dictionary> {
    return of(DICTIONARIES.find(dictionary => dictionary.id === id));
  }
}
