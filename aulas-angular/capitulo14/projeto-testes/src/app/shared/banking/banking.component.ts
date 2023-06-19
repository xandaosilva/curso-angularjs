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

  public setToWithdraw(value: string): number | undefined{
    const withDraw = Number(value);
    
    if(isNaN(withDraw) || this.account < withDraw) return;

    this.account -= withDraw;
    this.wallet += withDraw;

    return this.wallet;
  }
  
  public setDeposit(value: string): number | undefined{
    const deposit = Number(value);

    if(isNaN(deposit) || this.wallet < deposit) return;

    this.wallet -= deposit;
    this.account += deposit;

    return this.account;
  }

  get getAccount(): number{
    return this.account;
  }

  get getWallet(): number{
    return this.wallet;
  }
}
