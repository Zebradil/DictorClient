import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-article-detail-edit',
  templateUrl: './article-detail-edit.component.html',
  styleUrls: ['./article-detail-edit.component.scss']
})
export class ArticleDetailEditComponent implements OnInit {
  editMode: boolean;

  article: Article = new Article(0, '', '', 0);

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private articleService: ArticleService,
    private dictionaryService: DictionaryService,
  ) { }

  ngOnInit() {
    const articleId = +this.activeRoute.snapshot.paramMap.get('articleId');
    if (articleId) {
      this.editMode = true;
      // TODO handle wrong id
      this.articleService
        .getArticle(articleId)
        .subscribe(article => this.article = article);
    } else {
      this.editMode = false;
      const dictionaryId = +this.activeRoute.snapshot.paramMap.get('dictionaryId');
      // TODO handle wrong id
      this.dictionaryService
        .getDictionary(dictionaryId)
        .subscribe(dictionary => this.article.dictionary_id = dictionary.id);
    }
  }

  onSubmit() {
    let saveResult: Observable<Article>;
    if (this.article.id) {
      saveResult = this.articleService.updateArticle(this.article);
    } else {
      saveResult = this.articleService.createArticle(this.article);
    }
    saveResult.subscribe(article => this.router.navigate(['/articles/' + article.id]));
  }
}
