import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.scss'],
    providers: [NgbRatingConfig]
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    flavorKeys: string[];

    currentUser: User;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private authenticationService: AuthenticationService,
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

        this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user
        });
    }

}
