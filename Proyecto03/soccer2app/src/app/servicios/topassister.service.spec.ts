import { TestBed } from '@angular/core/testing';

import { TopassisterService } from './topassister.service';

describe('TopassisterService', () => {
  let service: TopassisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopassisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
