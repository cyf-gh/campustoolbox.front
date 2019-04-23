import { TestBed } from '@angular/core/testing';

import { ImageService } from './image/image.service';

describe('ImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageService = TestBed.get(ImageService);
    expect(service).toBeTruthy();
  });
});
