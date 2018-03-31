import { TestBed, inject } from '@angular/core/testing';

import { SoftskilldataService } from './softskilldata.service';

describe('SoftskilldataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoftskilldataService]
    });
  });

  it('should be created', inject([SoftskilldataService], (service: SoftskilldataService) => {
    expect(service).toBeTruthy();
  }));
});
