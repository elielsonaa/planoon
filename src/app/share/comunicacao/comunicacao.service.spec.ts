import { TestBed, inject } from '@angular/core/testing';

import { ComunicationService } from './comunicacao.service';

describe('ComunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComunicationService]
    });
  });

  it('should be created', inject([ComunicationService], (service: ComunicationService) => {
    expect(service).toBeTruthy();
  }));
});
