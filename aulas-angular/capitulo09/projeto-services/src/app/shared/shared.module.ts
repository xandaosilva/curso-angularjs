import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';



@NgModule({
  declarations: [
    FoodListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FoodListComponent
  ]
})
export class SharedModule { }
