import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.recipeService.getRecipe(params.id).subscribe((rec: any) => {
                this.recipe = {
                    id: rec.id,
                    name: rec.name,
                    imageUrl: rec.images.hostedLargeUrl,
                    rating: rec.rating,
                    time: rec.totalTimeInSeconds,
                    course: rec.attributes.course,
                    ingredients: rec.ingredientLines,
                    flavors: rec.flavors
                }
            });
        });
    }

}
