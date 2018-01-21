import { TestBed, inject } from '@angular/core/testing';

import { MeaningContextService } from './meaning-context.service';

describe('MeaningContextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeaningContextService]
    });
  });

  it('should be created', inject([MeaningContextService], (service: MeaningContextService) => {
    expect(service).toBeTruthy();
  }));
});
