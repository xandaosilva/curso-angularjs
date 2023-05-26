import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title></app-title>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <app-diretivas-atributos>
      <h1>Aulas de diretivas - Atributo</h1>
      <h3>Final da aula de diretivas</h3>
      <hr>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'projeto-diretivas';

  constructor(){}

  ngOnInit(): void {   
  }
}
