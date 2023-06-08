import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public foodList(): Observable<Array<FoodList>>{
    return this.http.get<Array<FoodList>>(`${this.url}list-food`).pipe(res => res, error => error);
  }

  public foodListAlert(value: FoodList){
    return this.emitEvent.emit(value.name);
  }

  public foodListAdd(value: string): Observable<FoodList>{
    return this.http.post<FoodList>(`${this.url}list-food`, { name: value }, this.httpOptions).pipe(res => res, error => error);
  }
  
  public foodListEdit(id: number, value: string): Observable<FoodList>{
    return this.http.put<FoodList>(`${this.url}list-food/${id}`, { name: value }).pipe(res => res, error => error);
  }
  
  public foodListDelete(id: number): Observable<FoodList>{
    return this.http.delete<FoodList>(`${this.url}list-food/${id}`).pipe(res => res, error => error);
  }
}
