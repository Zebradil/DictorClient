import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article: Article = new Article(0, '', '', 0);

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('articleId');
    this.articleService
      .getArticle(id)
      .subscribe(article => this.article = article);
  }

}
