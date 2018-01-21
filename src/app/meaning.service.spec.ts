import { TestBed, inject } from '@angular/core/testing';

import { MeaningService } from './meaning.service';

describe('MeaningService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeaningService]
    });
  });

  it('should be created', inject([MeaningService], (service: MeaningService) => {
    expect(service).toBeTruthy();
  }));
});
