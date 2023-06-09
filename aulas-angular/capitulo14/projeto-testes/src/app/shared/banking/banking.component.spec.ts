import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/components/list/list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Teste unitários
  it('(U) getAccount should account has 3000', () => {
    expect(component.getAccount).toEqual(3000);
  });
  
  it('(U) getWallet should wallet has 10000', () => {
    expect(component.getWallet).toEqual(10000);
  });
  
  it('(U) setToWithdraw should transfer from account to wallet', () => {
    component.setToWithdraw('3000');
    expect(component.getAccount).toEqual(0);
    expect(component.getWallet).toEqual(13000);
  });
  
  it('(u) setToWithdraw should not transfer with invalid value or if value is bigger then account', () => {
    expect(component.setToWithdraw('string')).not.toBeTruthy();
    expect(component.setToWithdraw('50000')).not.toBeTruthy();
    expect(component.getAccount).toEqual(3000);
    expect(component.getWallet).toEqual(10000);
  });

  it('(U) setDeposit should transfer from wallet to account', () => {
    component.setDeposit('10000');
    expect(component.getWallet).toEqual(0);
    expect(component.getAccount).toEqual(13000);
  });

  it('(u) setDepoist should not transfer with invalid value or if value is bigger then wallet', () => {
    expect(component.setDeposit('string')).not.toBeTruthy();
    expect(component.setDeposit('20000')).not.toBeTruthy();
    expect(component.getWallet).toEqual(10000);
    expect(component.getAccount).toEqual(3000);
  });

  // Testes de interface
  it('(I) setDeposit should transfer from wallet to account', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-deposit').value = 1000;
    el.querySelector('#deposit').click();
    fixture.detectChanges();
    expect(el.querySelector('#get-account').textContent).toEqual('4000');
    expect(el.querySelector('#get-wallet').textContent).toEqual('9000');
  });

  it('(I) setToWithdraw should transfer from account to wallet', () => {
    let el = fixture.debugElement.nativeElement;
    el.querySelector('#input-toWithDraw').value = 1000;
    el.querySelector('#toWithdraw').click();
    fixture.detectChanges();
    expect(el.querySelector('#get-wallet').textContent).toEqual('11000');
    expect(el.querySelector('#get-account').textContent).toEqual('2000');
  });
});
