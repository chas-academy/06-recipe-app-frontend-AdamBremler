import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
    recipes: string[] = ['Recipe 1', 'Recipe 2', 'Recipe 3'];

    constructor() { }

    ngOnInit() {
    }

}
