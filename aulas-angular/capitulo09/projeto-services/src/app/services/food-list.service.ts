import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

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

  public foodListAdd(value: string){
    return this.list.push(value);
  }
}
