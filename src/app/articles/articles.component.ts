import { Component, OnInit, Input } from '@angular/core';
import { Dictionary } from '../dictionary';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { Location } from '@angular/common';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(): void {
    const dictionaryId = +this.route.snapshot.paramMap.get('dictionaryId');
    this.articleService
      .getArticles(dictionaryId)
      .subscribe(articles => this.articles = articles);
  }
}
