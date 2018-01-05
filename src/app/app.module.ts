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
import { NavbarComponent } from './navbar/navbar.component';
import { SiteService } from './site.service';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    AppComponent,
    DictionariesComponent,
    ArticlesComponent,
    DictionaryDetailComponent,
    ArticleDetailComponent,
    NavbarComponent,
    FooterComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DictionaryService, ArticleService, SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
