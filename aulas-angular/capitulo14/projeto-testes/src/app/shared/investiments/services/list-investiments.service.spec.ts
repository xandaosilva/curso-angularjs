import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';

import { ListInvestimentsService } from './list-investiments.service';
import { HttpClient } from '@angular/common/http';
import { Investiments } from '../model/investiments';


describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const URL = "https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json";
  const mockList: Array<Investiments> = [
    { name: 'Banco 1', value:100 },
    { name: 'Banco 2', value:100 },
    { name: 'Banco 3', value:100 },
    { name: 'Banco 4', value:100 },
    { name: 'Banco 5', value:100 }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(ListInvestimentsService);
  });

  afterEach(() => {
    httpTestingController.verify()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Testes unitários
  it('(U) should be list all investiments', (done) => {
    service.list().subscribe((res: Array<Investiments>) => {
      expect(res[0].name).toEqual('Banco 1');
      expect(res[0].value).toEqual(100);
      expect(res[4].name).toEqual('Banco 5');
      expect(res[4].value).toEqual(100);
      done();
    });

    const req = httpTestingController.expectOne(URL);
    req.flush(mockList);
    expect(req.request.method).toEqual('GET');
  });
});
