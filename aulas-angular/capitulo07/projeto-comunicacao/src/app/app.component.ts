import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title></app-title>
    <app-input [counter]="addValue"></app-input>
    <hr>
    <button (click)="add()">Adicionar</button>
    <button (click)="sub()">Subtrair</button>
    <hr>
    <app-output (sendData)="setData($event)"></app-output>
    <hr>
    <ng-template [ngIf]="getData">
      <h1>{{ getData.name }}</h1>
      <h2>{{ getData.age }}</h2>
    </ng-template>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  public title: string = 'projeto-comunicacao';
  public addValue: number = 10;
  public getData: { name: string, age: number } | undefined;

  constructor(){}

  ngOnInit(): void {
  }

  public add(): void{
    this.addValue += 1;
  }

  public sub(): void {
    this.addValue -= 1;
  }

  public setData(event: { name: string, age: number }): void {
    this.getData = event;
  }
}
