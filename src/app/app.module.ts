import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';
import { ArticlesComponent } from './articles/articles.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { DictionaryService } from './dictionary.service';
import { AppRoutingModule } from './/app-routing.module';
import { ArticleService } from './article.service';


@NgModule({
  declarations: [
    AppComponent,
    DictionariesComponent,
    ArticlesComponent,
    DictionaryDetailComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DictionaryService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
