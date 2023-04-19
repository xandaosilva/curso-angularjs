import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = "Bem vindo !!!";

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log("ngOnChanges: texto alterado com sucesso.");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy: componente destruído.");
  }
}
