import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title></app-title>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-diretivas-atributos></app-diretivas-atributos>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'projeto-diretivas';

  constructor(){}

  ngOnInit(): void {   
  }
}
