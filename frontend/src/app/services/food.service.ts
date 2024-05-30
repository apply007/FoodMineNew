import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food.models';
import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag.models';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods;
  }
  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter((food) =>
      food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }
  getAllFoodByTag(tagName: string): Food[] {
    return tagName === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tagName));
  }

  getFoodById(foodId: string): Food {
    return this.getAll().find(food=>food.id==foodId) ?? new Food()
  }
}
