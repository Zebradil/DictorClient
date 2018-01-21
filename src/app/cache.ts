import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import log from './log';

class CacheValue {
  data: any;
  observable: Observable<any>;
}

interface CacheCollection { [key: string]: CacheValue; }

export class Cacher {
  private data: CacheCollection = {};

  @log({ logId: 'Cacher.has' })
  has(key: string): boolean {
    return this.data.hasOwnProperty(key);
  }

  @log({ logId: 'Cacher.get' })
  get(key: string): any {
    if (this.has(key)) {
      const val = this.data[key];
      if (!val) {
        return of(val);
      }
      if (val.data) {
        return of(val.data);
      } else {
        return val.observable;
      }
    } else {
      throw new Error('Key not found.');
    }
  }

  @log({ logId: 'Cacher.setData', showResult: false })
  setData(key: string, val: any): void {
    this.data[key] = {
      data: val,
      observable: null,
    };
  }

  @log({ logId: 'Cacher.setObservable', showResult: false })
  setObservable(key: string, val: Observable<any>): void {
    this.data[key] = {
      data: null,
      observable: val,
    };
  }

  @log({ logId: 'Cacher.del', showResult: false })
  del(key: string): void {
    if (this.has(key)) {
      delete this.data[key];
    } else {
      throw new Error('Key not found.');
    }
  }
}
