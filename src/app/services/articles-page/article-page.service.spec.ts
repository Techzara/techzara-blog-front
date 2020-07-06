import { TestBed } from '@angular/core/testing';

import { ArticlePageService } from './article-page.service';

describe('ArticlePageService', () => {
  let service: ArticlePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
