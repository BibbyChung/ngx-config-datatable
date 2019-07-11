import { TestBed } from '@angular/core/testing';

import { NgxConfigDatatableService } from './ngx-config-datatable.service';

describe('NgxConfigDatatableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxConfigDatatableService = TestBed.get(NgxConfigDatatableService);
    expect(service).toBeTruthy();
  });
});
