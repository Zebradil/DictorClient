import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionariesComponent } from './dictionaries/dictionaries.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dictionaries', pathMatch: 'full' },
  { path: 'dictionaries', component: DictionariesComponent },
  { path: 'dictionary/:id', component: DictionaryDetailComponent },
  { path: 'dictionary/:id/articles', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
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
