import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../../shared/models/Food.models';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
  food!:Food
constructor( activatedRoute:ActivatedRoute,foodService:FoodService){
activatedRoute.params.subscribe(

(params)=>{
  if(params.id){
    this.food=foodService.getFoodById(params.id)
  }
}

)
}
}
