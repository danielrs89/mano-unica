import { TestBed } from '@angular/core/testing';

import { ManoTresService } from './mano-tres.service';

describe('ManoTresService', () => {
  let service: ManoTresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManoTresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
