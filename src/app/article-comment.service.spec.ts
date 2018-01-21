import { TestBed, inject } from '@angular/core/testing';

import { ArticleCommentService } from './article-comment.service';

describe('ArticleCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleCommentService]
    });
  });

  it('should be created', inject([ArticleCommentService], (service: ArticleCommentService) => {
    expect(service).toBeTruthy();
  }));
});
