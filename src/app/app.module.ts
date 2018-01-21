import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { ArticleCommentService } from './article-comment.service';
import { ArticleLinkService } from './article-link.service';
import { MeaningService } from './meaning.service';
import { MeaningContextService } from './meaning-context.service';
import { MeaningDetailEditComponent } from './meaning-detail-edit/meaning-detail-edit.component';
import { MeaningContextDetailEditComponent } from './meaning-context-detail-edit/meaning-context-detail-edit.component';
import { ArticleLinkDetailEditComponent } from './article-link-detail-edit/article-link-detail-edit.component';
import { ArticleCommentDetailEditComponent } from './article-comment-detail-edit/article-comment-detail-edit.component';


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
    MeaningDetailEditComponent,
    MeaningContextDetailEditComponent,
    ArticleLinkDetailEditComponent,
    ArticleCommentDetailEditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    DictionaryService,
    ArticleService,
    SiteService,
    ArticleCommentService,
    ArticleLinkService,
    MeaningService,
    MeaningContextService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
