import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { DictionaryService } from '../dictionary.service';
import { ArticleService } from '../article.service';
import { SiteService } from '../site.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';

interface IBreadcrumb {
  title: string;
  link: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: IBreadcrumb[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private siteService: SiteService,
    private dictionaryService: DictionaryService,
    private articleService: ArticleService,
  ) { }


  ngOnInit() {
    this.router.events
      .subscribe(event => {
        if (event instanceof RoutesRecognized) {
          let route = event.state.root.firstChild;
          while (route.firstChild) { route = route.firstChild; }
          this.breadcrumbs = this.getBreadcrumbs(route);
        }
      });
  }


  getBreadcrumbs(route: ActivatedRouteSnapshot): IBreadcrumb[] {
    switch (route.data.name) {
      case 'home': return this.getBreadcrumbsForHome();
      case 'dictionaries': return this.getBreadcrumbsForDictionaries();
      case 'dictionary': return this.getBreadcrumbsForDictionary(of(+route.paramMap.get('dictionaryId')));
      case 'dictionary-edit': return this.getBreadcrumbsForDictionaryEdit(of(+route.paramMap.get('dictionaryId')));
      case 'articles': return this.getBreadcrumbsForArticles(of(+route.paramMap.get('dictionaryId')));
      case 'article': return this.getBreadcrumbsForArticle(of(+route.paramMap.get('articleId')));
      default: return [];
    }
  }


  getBreadcrumbsForHome(withLink: boolean = false): IBreadcrumb[] {
    // TODO: remove any
    const site: any = this.siteService.getSiteInfo();
    return [{
      title: site.mainPage.title,
      link: withLink ? site.mainPage.link : null,
    }];
  }


  getBreadcrumbsForDictionaries(withLink: boolean = false): IBreadcrumb[] {
    return this.getBreadcrumbsForHome(true).concat([{
      title: 'dictionaries',
      link: withLink ? '/dictionaries' : null,
    }]);
  }


  getBreadcrumbsForDictionary(
    observableDictionaryId: Observable<number>,
    withLink: boolean = false
  ): IBreadcrumb[] {

    const dictionaryBreadcrumb: IBreadcrumb = {
      title: '',
      link: null,
    };

    observableDictionaryId
      .subscribe(dictionaryId => {
        this.dictionaryService
          .getDictionary(dictionaryId)
          .subscribe(dictionary => {
            dictionaryBreadcrumb.title = dictionary.name;
            dictionaryBreadcrumb.link = withLink ? '/dictionaries/' + dictionary.id : null;
          });
      });

    return this.getBreadcrumbsForDictionaries(true)
      .concat([dictionaryBreadcrumb]);
  }


  getBreadcrumbsForDictionaryEdit(observableDictionaryId: Observable<number>): IBreadcrumb[] {
    const dictionaryBreadcrumb: IBreadcrumb = {
      title: '',
      link: null,
    };

    observableDictionaryId.subscribe(dictionaryId => {
      if (dictionaryId) {
        this.dictionaryService
          .getDictionary(dictionaryId)
          .subscribe(dictionary => {
            dictionaryBreadcrumb.title = 'Edit ' + dictionary.name;
          });
      } else {
        dictionaryBreadcrumb.title = 'New dictionary';
      }
    });

    return this.getBreadcrumbsForDictionaries(true)
      .concat(dictionaryBreadcrumb);
  }


  getBreadcrumbsForArticles(
    observableDictionaryId: Observable<number>,
    withLink: boolean = false
  ): IBreadcrumb[] {

    const articlesBreadcrumb = {
      title: 'articles',
      link: null,
    };

    observableDictionaryId
      .subscribe(dictionaryId => {
        articlesBreadcrumb.link = withLink ? '/dictionaries/' + dictionaryId + '/articles' : null;
      });

    return this.getBreadcrumbsForDictionary(observableDictionaryId, true)
      .concat([articlesBreadcrumb]);
  }


  getBreadcrumbsForArticle(
    observableArticleId: Observable<number>,
    withLink: boolean = false
  ): IBreadcrumb[] {

    const articleBreadcrumb = {
      title: '',
      link: null,
    };

    const observableDictionaryId = new Observable<number>(observer => {
      observableArticleId
        .subscribe(articleId => {
          this.articleService
            .getArticle(articleId)
            .subscribe(article => {
              articleBreadcrumb.title = article.title;
              articleBreadcrumb.link = withLink ? '/articles/' + articleId : null;
              observer.next(article.dictionary_id);
              observer.complete();
            });
        });
    });

    return this.getBreadcrumbsForArticles(observableDictionaryId, true)
      .concat([articleBreadcrumb]);
  }
}
