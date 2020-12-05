import { TestBed } from '@angular/core/testing';

import { SpectreInputService } from './spectre-input.service';

describe('SpectreInputService', () => {
  let service: SpectreInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpectreInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
