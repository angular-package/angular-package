
// external
import { NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { TestBed, inject } from '@angular/core/testing';

beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
});

import { PrismService } from './prism.service';

describe('PrismService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrismService]
    });
  });

  it('should be created', inject([PrismService], (service: PrismService) => {
    expect(service).toBeTruthy();
  }));
});
