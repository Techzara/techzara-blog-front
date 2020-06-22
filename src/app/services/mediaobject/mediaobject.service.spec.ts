import { TestBed } from '@angular/core/testing';

import { MediaobjectService } from './mediaobject.service';

describe('MediaobjectService', () => {
  let service: MediaobjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaobjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
