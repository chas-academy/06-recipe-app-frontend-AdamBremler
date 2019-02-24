import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        this.setRecipes();
    }

    setRecipes(params: string[] = []) {
        this.recipeService.getRecipes(params).subscribe((recipes: Recipe[]) => {
            this.recipes = recipes;
        })
    }

}
