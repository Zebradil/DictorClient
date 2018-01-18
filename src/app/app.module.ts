import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


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
import { DictionaryDetailEditComponent } from './dictionary-detail-edit/dictionary-detail-edit.component';
import { ArticleDetailEditComponent } from './article-detail-edit/article-detail-edit.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DictionariesComponent,
    ArticlesComponent,
    DictionaryDetailComponent,
    ArticleDetailComponent,
    NavbarComponent,
    FooterComponent,
    BreadcrumbsComponent,
    DictionaryDetailEditComponent,
    ArticleDetailEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [DictionaryService, ArticleService, SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
