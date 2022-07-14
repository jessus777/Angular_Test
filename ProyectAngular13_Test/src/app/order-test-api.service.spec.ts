import { TestBed } from '@angular/core/testing';

import { OrderTestApiService } from './order-test-api.service';

describe('OrderTestApiService', () => {
  let service: OrderTestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderTestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
