import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  public list: Array<{name: string, age: number}> = [
    { name: "João", age: 25 },
    { name: "Maria", age: 32 },
    { name: "Pedro", age: 18 },
    { name: "Ana", age: 45 },
    { name: "Lucas", age: 27 },
    { name: "Julia", age: 33 },
    { name: "Tiago", age: 40 },
    { name: "Carla", age: 22 },
    { name: "Bruno", age: 30 },
    { name: "Fernanda", age: 35 }
  ];
  
  @Output() public sendData = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  }

  public getData(event: number): void {
    this.sendData.emit(this.list[event]);
  }
}
