import { TestBed } from '@angular/core/testing';

import { SpectreService } from './spectre.service';

describe('SpectreService', () => {
  let service: SpectreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpectreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
