import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss'],
    providers: [NgbRatingConfig]
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    flavorKeys: string[];

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        config: NgbRatingConfig
    ) {
        config.max = 5;
        config.readonly = true;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.recipeService.getRecipe(params.id).subscribe((rec: Recipe) => {
                this.recipe = rec;

                this.flavorKeys = Object.keys(this.recipe.flavors);
            });
        });
    }

}
