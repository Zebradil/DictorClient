import { TestBed, inject } from '@angular/core/testing';

import { ArticleLinkService } from './article-link.service';

describe('ArticleLinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleLinkService]
    });
  });

  it('should be created', inject([ArticleLinkService], (service: ArticleLinkService) => {
    expect(service).toBeTruthy();
  }));
});
