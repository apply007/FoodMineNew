import { Food } from './app/shared/models/Food.models';
import { Tag } from './app/shared/models/Tag.models';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Burger',
    price: 50,
    tags: ['FastFood'],
    favorite: true,
    stars: 4.0,
    imageUrl: 'assets/food-1.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '2',
    name: 'Pizza',
    price: 50,
    tags: ['FastFood'],
    favorite: true,
    stars: 3.5,
    imageUrl: 'assets/food-2.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '3',
    name: 'ChickenFry',
    price: 50,
    tags: ['Soup'],
    favorite: true,
    stars: 1.5,
    imageUrl: 'assets/food-3.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '4',
    name: 'Lobstar',
    price: 50,
    tags: ['Soup'],
    favorite: false,
    stars: 5.0,
    imageUrl: 'assets/food-4.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '5',
    name: 'Curry',
    price: 50,
    tags: ['SlowFood'],
    favorite: false,
    stars: 3.8,
    imageUrl: 'assets/food-5.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '6',
    name: 'Cock',
    price: 50,
    tags: ['Soup'],
    favorite: false,
    stars: 2.0,
    imageUrl: 'assets/food-6.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
  {
    id: '7',
    name: 'Pizza',
    price: 50,
    tags: ['Pizza'],
    favorite: false,
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    origins: ['BD', 'USA'],
    cookTime: '40-50',
  },
];

export const sample_tags: Tag[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
];
