import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

    constructor() { }

    ngOnInit() {
        this.recipes = [
            {
                id: 1,
                title: 'Recept 1'
            },
            {
                id: 2,
                title: 'Recept 2'
            },
            {
                id: 3,
                title: 'Recept 3'
            }
        ]
    }

}
