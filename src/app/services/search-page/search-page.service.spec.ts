import { TestBed } from '@angular/core/testing';

import { SearchPageService } from './search-page.service';

describe('SearchPageService', () => {
  let service: SearchPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
