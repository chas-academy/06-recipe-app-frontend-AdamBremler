import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
import { List } from 'src/app/models/list';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-list-detail',
    templateUrl: './list-detail.component.html',
    styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
    list: List;
    recipes: Recipe[] = [];

    constructor(
        private route: ActivatedRoute,
        private listService: ListService,
        private recipeService: RecipeService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.listService.getList(params.id).subscribe((list: List) => {
                this.list = list;
                list.recipes.map((rec: any) => {
                    this.recipeService.getRecipe(rec).subscribe((data: Recipe) => {
                        this.recipes.push(data);
                    })
                })
            });
        });
    }

    deleteRecipe(id: string) {
        this.list.recipes = this.list.recipes.filter((recipe: string) => recipe !== id);
        this.recipes = this.recipes.filter((recipe: Recipe) => recipe.id !== id);

        this.listService.updateList(this.list).subscribe((data: any) => {
            if(!data.success) {
                alert('Could not delete recipe');
            }
        })
    }

}
