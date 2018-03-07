import { TestBed, inject } from '@angular/core/testing';

import { ListDataService } from './list-data.service';

describe('ListDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListDataService]
    });
  });

  it('should be created', inject([ListDataService], (service: ListDataService) => {
    expect(service).toBeTruthy();
  }));
});
