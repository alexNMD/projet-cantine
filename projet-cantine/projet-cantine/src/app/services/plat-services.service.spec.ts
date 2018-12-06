import { TestBed } from '@angular/core/testing';

import { PlatServicesService } from './plat-services.service';

describe('PlatServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlatServicesService = TestBed.get(PlatServicesService);
    expect(service).toBeTruthy();
  });
});
