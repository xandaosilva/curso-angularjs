import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "Pizza Margherita",
    "Lasanha à Bolonhesa",
    "Salada Caesar",
    "Pudim de Leite Condensado"
  ];

  constructor() { }

  public foodList(){
    return this.list;
  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }

  public foodListAdd(value: string){
    this.foodListAlert(value);
    return this.list.push(value);
  }

}
