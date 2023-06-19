import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Testes unitários
  it('(U) should list investiments', () => {
    let investiments = component.investiments;
    expect(investiments.length).toBe(4);
    expect(investiments[0].name).toContain('Itaú');
    expect(investiments[1].name).toContain('Banco do Brasil');
    expect(investiments[2].name).toContain('Bradesco');
    expect(investiments[3].name).toContain('Nubank');
  });

  // Testes de interface
  it('(I) should list investiments', () => {
    let investiments = fixture.debugElement.nativeElement.querySelectorAll('.list-itens');
    expect(investiments.length).toBe(4);
    expect(investiments[0].textContent.trim()).toEqual('Itaú | 100');
    expect(investiments[1].textContent.trim()).toEqual('Banco do Brasil | 100');
    expect(investiments[2].textContent.trim()).toEqual('Bradesco | 100');
    expect(investiments[3].textContent.trim()).toEqual('Nubank | 100');
  });
});
