import { Observable } from 'rxjs/Observable';
import { Article } from './article';
import { BaseResourceService } from './base-resource.service';
import { environment } from '../environments/environment';

export class ArticleService extends BaseResourceService<Article> {

  getUrl(path: string): string {
    return environment.apiEndpoint + path;
  }

  getArticle(id: number): Observable<Article> {
    return this.getItem(this.getUrl('articles/' + id), id.toString());
  }

  getArticles(dictionary_id: number): Observable<Article[]> {
    return this.getItems(this.getUrl('dictionaries/' + dictionary_id + '/articles'));
  }

  createArticle(article: Article): Observable<Article> {
    return this.createItem(
      this.getUrl('dictionaries/' + article.dictionary_id + '/articles'),
      article,
      (a) => a.id.toString(),
    );
  }

  updateArticle(article: Article): Observable<Article> {
    return this.updateItem(this.getUrl('articles/' + article.id), article, article.id.toString());
  }

  deleteArticle(article: Article): Observable<Object> {
    return this.deleteItem(this.getUrl('articles/' + article.id), article.id.toString());
  }
}
