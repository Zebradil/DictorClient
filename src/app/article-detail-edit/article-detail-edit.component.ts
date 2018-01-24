import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DictionaryService } from '../dictionary.service';
import { Meaning } from '../meaning';
import { MeaningContext } from '../meaning-context';
import { ArticleLink } from '../article-link';
import { ArticleComment } from '../article-comment';

@Component({
  selector: 'app-article-detail-edit',
  templateUrl: './article-detail-edit.component.html',
  styleUrls: ['./article-detail-edit.component.scss']
})
export class ArticleDetailEditComponent implements OnInit {
  editMode: boolean;
  articleForm: FormGroup;
  article: Article = new Article(0, '', '', 0);

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private articleService: ArticleService,
    private dictionaryService: DictionaryService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.articleForm = this.initArticle(new Article(0, '', '', 0));

    const articleId = +this.activeRoute.snapshot.paramMap.get('articleId');
    if (articleId) {
      this.editMode = true;
      // TODO handle wrong id
      this.articleService
        .getArticle(articleId)
        .subscribe(article => {
          this.article = article;
          this.articleForm = this.initArticle(article);
        });
    } else {
      this.editMode = false;
      const dictionaryId = +this.activeRoute.snapshot.paramMap.get('dictionaryId');
      // TODO handle wrong id
      this.dictionaryService
        .getDictionary(dictionaryId)
        .subscribe(dictionary => this.article.dictionary_id = dictionary.id);
    }
  }

  initArticle(article: Article): FormGroup {
    return this.fb.group({
      title: [article.title, Validators.required],
      grammar: [article.grammar],
      meanings: this.fb.array(article.meanings.map(meaning => this.initMeaning(meaning))),
      links: this.fb.array(article.links.map(link => this.initLink(link))),
      comments: this.fb.array(article.comments.map(comment => this.initComment(comment))),
    });
  }

  initMeaning(meaning: Meaning): FormGroup {
    return this.fb.group({
      code: [meaning.code],
      style: [meaning.style],
      text: [meaning.text, Validators.required],
      contexts: this.fb.array(meaning.contexts.map(context => this.initMeaningContext(context))),
    });
  }

  initMeaningContext(context: MeaningContext): FormGroup {
    return this.fb.group({
      text: [context.text, Validators.required],
      source: [context.source],
    });
  }

  initLink(link: ArticleLink): FormGroup {
    return this.fb.group({
      type: [link.type, Validators.required],
      target: [link.target, Validators.required],
    });
  }

  initComment(comment: ArticleComment): FormGroup {
    return this.fb.group({
      text: [comment.text, Validators.required],
    });
  }

  save() {
    const saveArticle = this.prepareSaveArticle();
    let saveResult: Observable<Article>;
    if (this.article.id) {
      saveResult = this.articleService.updateArticle(saveArticle);
    } else {
      saveResult = this.articleService.createArticle(saveArticle);
    }
    saveResult.subscribe(article => this.router.navigate(['/articles/' + article.id]));
  }

  prepareSaveArticle(): Article {
    const model = this.articleForm.value;
    const links = model.links.map(link => Object.assign({}, link));
    const comments = model.comments.map(comment => Object.assign({}, comment));
    const meanings = model.meanings.map((meaning) => {
      const contexts = meaning.contexts.map(context => Object.assign({}, context));
      return Object.assign({}, meaning, { contexts: contexts });
    });
    // TODO implement `clone`/`extend` method on models
    const saveArticle: Article = {
      id: this.article.id,
      dictionary_id: this.article.dictionary_id,
      grammar: model.grammar,
      title: model.title,
      links: links,
      comments: comments,
      meanings: meanings,
    };
    return saveArticle;
  }

  deleteArticle(article: Article) {
    if (confirm('You\'re going to delete the article. Are you sure?')) {
      this.articleService
        .deleteArticle(article)
        .subscribe(res => this.router.navigate(['/dictionaries/' + article.dictionary_id + '/articles']));
    }
    return false;
  }

  addLink(links: FormArray): boolean {
    links.push(this.initLink(new ArticleLink()));
    return false;
  }

  deleteLink(index: number): boolean {
    if (confirm('You\'re going to delete the link. Are you sure?')) {
      const control = <FormArray>this.articleForm.controls.links;
      control.removeAt(index);
    }
    return false;
  }

  addComment(comments: FormArray): boolean {
    comments.push(this.initComment(new ArticleComment()));
    return false;
  }

  deleteComment(index: number): boolean {
    if (confirm('You\'re going to delete the comment. Are you sure?')) {
      const control = <FormArray>this.articleForm.controls.comments;
      control.removeAt(index);
    }
    return false;
  }

  addMeaning(meanings: FormArray): boolean {
    meanings.push(this.initMeaning(new Meaning()));
    return false;
  }

  deleteMeaning(index: number): boolean {
    if (confirm('You\'re going to delete the meaning. Are you sure?')) {
      const control = <FormArray>this.articleForm.controls.meanings;
      control.removeAt(index);
    }
    return false;
  }

  d(v: any): string {
    return JSON.stringify(v);
  }
}
