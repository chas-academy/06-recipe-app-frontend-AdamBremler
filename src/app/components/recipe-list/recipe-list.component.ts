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
        this.recipeService.getRecipes().subscribe(data => {
            this.recipes = data['matches'].map((rec: any) => {
                return {
                    id: rec.id,
                    name: rec.recipeName,
                    imageUrl: rec.smallImageUrls[0],
                    rating: rec.rating,
                    time: rec.totalTimeInSeconds,
                    course: rec.attributes.course,
                    ingredients: rec.ingredients,
                    flavors: rec.flavors
                }
            });
        });
    }

}
