import { TestBed } from '@angular/core/testing';

import { WarpService } from './warp.service';

describe('WarpService', () => {
  let service: WarpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
