import { Dictionary } from './dictionary';
import { Observable } from 'rxjs/Observable';
import { BaseResourceService } from './base-resource.service';
import { environment } from '../environments/environment';

export class DictionaryService extends BaseResourceService<Dictionary> {

  getUrl(path: string): string {
    return environment.apiEndpoint + path;
  }

  getDictionaries(): Observable<Dictionary[]> {
    return this.getItems(this.getUrl('dictionaries'));
  }

  getDictionary(id: number): Observable<Dictionary> {
    return this.getItem(this.getUrl('dictionaries/' + id), id.toString());
  }

  createDictionary(dictionary: Dictionary): Observable<Dictionary> {
    return this.createItem(this.getUrl('dictionaries'), dictionary, (d) => d.id.toString());
  }

  updateDictionary(dictionary: Dictionary): Observable<Dictionary> {
    return this.updateItem(this.getUrl('dictionaries/' + dictionary.id), dictionary, dictionary.id.toString());
  }

  deleteDictionary(dictionary: Dictionary): Observable<Object> {
    return this.deleteItem(this.getUrl('dictionaries/' + dictionary.id), dictionary.id.toString());
  }
}
