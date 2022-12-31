import { TestBed } from '@angular/core/testing';

import { TopscorerService } from './topscorer.service';

describe('TopscorerService', () => {
  let service: TopscorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopscorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
