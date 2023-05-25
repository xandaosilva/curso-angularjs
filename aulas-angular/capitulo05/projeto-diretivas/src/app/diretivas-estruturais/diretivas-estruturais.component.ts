import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public championList: Array<{name: string}> = [ { name: "Braum" }, { name: "Alistar" }, 
    { name: "Leona" }, { name: "Thresh" }, { name: "Maokai" }, { name: "Nautilus" }, 
    { name: "Rakan" }, { name: "Sejuani" }, { name: "Shen" }, { name: "Rumble" } ];

  public name: string = "";

  constructor(){}

  ngOnInit(): void {
    setInterval(() => {
      this.condition = this.condition === true ? false : true;
    }, 2000);
  }

  public onClick(): void {
    this.conditionClick = this.conditionClick === true ? false : true;
  }

  public onClickAddList(): void{
    this.championList.push({ name: "Teemo" });
  }

  public onClickRemoveList(event: number): void {
    this.championList.splice(event, 1);
  }
}
