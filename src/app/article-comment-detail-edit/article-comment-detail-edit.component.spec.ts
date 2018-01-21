import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCommentDetailEditComponent } from './article-comment-detail-edit.component';

describe('ArticleCommentDetailEditComponent', () => {
  let component: ArticleCommentDetailEditComponent;
  let fixture: ComponentFixture<ArticleCommentDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleCommentDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCommentDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
