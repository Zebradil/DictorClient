import { Injectable } from '@angular/core';

@Injectable()
export class SiteService {

  constructor() { }

  getFooterText(): string {
    return '2017';
  }

  getSiteInfo(): object {
    return {
      title: 'Dictor',
      subtitle: 'Dictionary editor',
      mainPage: {
        title: '🏠',
        link: '/'
      }
    };
  }
}
