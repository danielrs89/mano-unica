import { TestBed } from '@angular/core/testing';

import { ManoCincoService } from './mano-cinco.service';

describe('ManoCincoService', () => {
  let service: ManoCincoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManoCincoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
