import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [];

  private url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  public foodList(): Observable<FoodList>{
    return this.http.get<FoodList>(`${this.url}list-food`).pipe(res => res, error => error);
  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }

  public foodListAdd(value: string){
    this.foodListAlert(value);
    return this.list.push(value);
  }

}
