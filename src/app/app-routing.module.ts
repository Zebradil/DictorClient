import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionariesComponent } from './dictionaries/dictionaries.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryDetailEditComponent } from './dictionary-detail-edit/dictionary-detail-edit.component';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dictionaries',
    pathMatch: 'full',
    data: {
      name: 'home',
    },
  },
  {
    path: 'dictionaries',
    component: DictionariesComponent,
    data: {
      name: 'dictionaries',
    },
  },
  {
    path: 'dictionary/new',
    component: DictionaryDetailEditComponent,
    data: {
      name: 'dictionary-edit',
    },
  },
  {
    path: 'dictionary/:dictionaryId/edit',
    component: DictionaryDetailEditComponent,
    data: {
      name: 'dictionary-edit',
    },
  },
  {
    path: 'dictionary/:dictionaryId',
    component: DictionaryDetailComponent,
    data: {
      name: 'dictionary',
    },
  },
  {
    path: 'dictionary/:dictionaryId/articles',
    component: ArticlesComponent,
    data: {
      name: 'articles',
    },
  },
  {
    path: 'dictionary/:dictionaryId/article/new',
    component: ArticleDetailEditComponent,
    data: {
      name: 'article-edit',
    },
  },
  {
    path: 'article/:articleId',
    component: ArticleDetailComponent,
    data: {
      name: 'article',
    },
  },
  {
    path: 'article/:articleId/edit',
    component: ArticleDetailEditComponent,
    data: {
      name: 'article-edit',
    },
  },
];

@NgModule({
  exports: [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
})
export class AppRoutingModule { }
