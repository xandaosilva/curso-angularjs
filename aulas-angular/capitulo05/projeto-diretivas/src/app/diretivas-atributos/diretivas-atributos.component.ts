import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit{

  public value: boolean = true;
  public heightPx: string = "20px";
  public backgroundColor: string = "gold";

  constructor(){}

  ngOnInit(): void {
    setInterval(() => {
      this.value = this.value === true ? false : true;

      if(this.heightPx === "20px"){
        this.heightPx = "50px";
        this.backgroundColor = "blue";
      }
      else{
        this.heightPx = "20px";
        this.backgroundColor = "gold";
      }
    }, 2000);
  }
}
