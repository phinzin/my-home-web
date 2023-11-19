import { TestBed } from '@angular/core/testing';

import { MyHomeServiceService } from './my-home-service.service';

describe('MyHomeServiceService', () => {
  let service: MyHomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
