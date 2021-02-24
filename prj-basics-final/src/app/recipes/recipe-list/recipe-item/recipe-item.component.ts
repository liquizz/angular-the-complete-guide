import {Component, Input, OnInit} from '@angular/core';

interface Recipe {
  name: string;
  description: string;
  imagePath: string;
}

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipeElement') recipeElement: Recipe;

  constructor() { }

  ngOnInit() {
  }



}
