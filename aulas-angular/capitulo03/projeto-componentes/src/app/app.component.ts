import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Hello World!!!" *ngIf="destroy"></app-title>
    <p>Valor: {{ value }}</p>
    <br>
    <hr>
    <button (click)="add()">Adicionar</button>
    <button (click)="sub()">Subtrair</button>
    <br>
    <hr>
    <button (click)="destroyComponent()">Destruir componente</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
  constructor(){}

  public value: number = 1;
  public destroy: boolean = true

  public add(): number{
    return this.value += 1;
  }

  public sub(): number{
    return this.value -= 1;
  }

  public destroyComponent(): void{
    this.destroy = false;
  }

  ngOnInit(): void{
    setTimeout(() => {
      console.log("ngOnInit");
    }, 5000);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
}
