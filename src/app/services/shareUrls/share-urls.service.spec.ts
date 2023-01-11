import { TestBed } from '@angular/core/testing';

import { ShareUrlsService } from './share-urls.service';

describe('ShareUrlsService', () => {
  let service: ShareUrlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareUrlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
