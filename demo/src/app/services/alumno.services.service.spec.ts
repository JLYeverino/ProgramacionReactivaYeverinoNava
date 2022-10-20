import { TestBed } from '@angular/core/testing';

import { AlumnoServicesService } from './alumno.services.service';

describe('AlumnoServicesService', () => {
  let service: AlumnoServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
