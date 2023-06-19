import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  private account: number = 3000.00;
  private wallet: number = 10000.00;

  constructor(){}

  ngOnInit(): void {
  }

  public setToWithdraw(value: string): number{
    const withDraw = Number(value);
    console.log(withDraw);
    return withDraw;
  }
  
  public setDeposit(value: string): number{
    const deposit = Number(value);
    console.log(deposit);
    return deposit;
  }

  get getAccount(): number{
    return this.account;
  }

  get getWallet(): number{
    return this.wallet;
  }
}
