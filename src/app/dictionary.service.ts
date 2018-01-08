import { Injectable } from '@angular/core';
import { Dictionary } from './dictionary';
import { DICTIONARIES } from './mock-dictionaries';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators';

function getMaxId(collection: Dictionary[]): number {
  return collection
    ? collection.reduce((prev, curr) => prev.id < curr.id ? curr : prev).id
    : 0;
}

@Injectable()
export class DictionaryService {

  constructor() { }

  getDictionaries(): Observable<Dictionary[]> {
    return of(DICTIONARIES);
  }

  getDictionary(id: number): Observable<Dictionary> {
    return of(DICTIONARIES.find(dictionary => dictionary.id === id));
  }

  createDictionary(dictionary: Dictionary): Observable<Dictionary> {
    dictionary.id = getMaxId(DICTIONARIES) + 1;
    DICTIONARIES.push(dictionary);
    return of(dictionary);
  }

  updateDictionary(dictionary: Dictionary): Observable<Dictionary> {
    return this.getDictionary(dictionary.id)
      .pipe(switchMap((oldDictionary: Dictionary, i: number) => {
        oldDictionary.name = dictionary.name;
        oldDictionary.description = dictionary.description;
        return of(oldDictionary);
      }));
  }
}
