import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public name: string = "Alexandre";
  public age: number = 30;
  public checkDisabled: boolean = true;
  public imgSrc: string = "https://i.pinimg.com/736x/03/58/24/035824ef4d398b353c4296eefd8eb826.jpg";
  public imgTitle: string = "Sejuani fogos de artifício";
  public position: {x: number, y: number} = {x: 0, y: 0};
  
  constructor(){}

  ngOnInit(): void {}

  public alertInfo(value: string){
    alert(value);
  }

  public mouseMoveTest(value: MouseEvent){
    this.position.x = value.offsetX;
    this.position.y = value.offsetY;
  }
}
