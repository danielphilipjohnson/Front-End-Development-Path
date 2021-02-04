import { TestBed } from '@angular/core/testing';

import { FetchPhotoPostsService } from './fetch-photo-posts.service';

describe('FetchPhotoPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchPhotoPostsService = TestBed.get(FetchPhotoPostsService);
    expect(service).toBeTruthy();
  });
});
