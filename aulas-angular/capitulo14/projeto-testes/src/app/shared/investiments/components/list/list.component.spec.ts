import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Investiments } from '../../model/investiments';
import { MOCK_LIST } from '../../services/list.investiments.mock';
import { ListInvestimentsService } from '../../services/list-investiments.service';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService;
  const mockList: Array<Investiments> = MOCK_LIST;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testes unitários
  it('(U) should list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));
    component.ngOnInit();
    fixture.detectChanges();
    expect(service.list).toHaveBeenCalledWith();
    expect(component.investiments.length).toBe(5);
    expect(component.investiments[0].name).toEqual('Banco 1');
    expect(component.investiments[1].name).toEqual('Banco 2');
    expect(component.investiments[2].name).toEqual('Banco 3');
    expect(component.investiments[3].name).toEqual('Banco 4');
    expect(component.investiments[4].name).toEqual('Banco 5');
    expect(component.investiments[0].value).toEqual(100);
    expect(component.investiments[1].value).toEqual(100);
    expect(component.investiments[2].value).toEqual(100);
    expect(component.investiments[3].value).toEqual(100);
    expect(component.investiments[4].value).toEqual(100);
  });

  // Testes de interface
  it('(I) should list investiments', () => {
    spyOn(service, 'list').and.returnValue(of(mockList));
    component.ngOnInit();
    fixture.detectChanges();
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
    expect(investiments.length).toBe(5);
    expect(investiments[0].textContent.trim()).toEqual('Banco 1 | 100');
    expect(investiments[1].textContent.trim()).toEqual('Banco 2 | 100');
    expect(investiments[2].textContent.trim()).toEqual('Banco 3 | 100');
    expect(investiments[3].textContent.trim()).toEqual('Banco 4 | 100');
    expect(investiments[4].textContent.trim()).toEqual('Banco 5 | 100');
  });
});
