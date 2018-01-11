import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from '../dictionary';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Location } from '@angular/common';
import { Article } from '../article';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  dictionary: Dictionary;
  articles: Article[];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private dictionaryService: DictionaryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    const dictionaryId = +this.route.snapshot.paramMap.get('dictionaryId');
    this.dictionaryService
      .getDictionary(dictionaryId)
      .subscribe(dictionary => this.dictionary = dictionary);
    this.articleService
      .getArticles(dictionaryId)
      .subscribe(articles => this.articles = articles);
  }
}
