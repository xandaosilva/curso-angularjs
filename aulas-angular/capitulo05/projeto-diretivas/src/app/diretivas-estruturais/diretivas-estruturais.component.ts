import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  constructor(){}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = this.condition === true ? false : true;
    }, 2000);
  }

  public onClick(): void {
    this.conditionClick = this.conditionClick === true ? false : true;
  }
}
