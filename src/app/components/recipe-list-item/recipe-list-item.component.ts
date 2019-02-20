import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-recipe-list-item',
    templateUrl: './recipe-list-item.component.html',
    styleUrls: ['./recipe-list-item.component.scss'],
    providers: [NgbRatingConfig]
})
export class RecipeListItemComponent implements OnInit {

    @Input() recipe: Recipe;

    constructor(config: NgbRatingConfig) {
        config.max = 5;
        config.readonly = true;
    }

    ngOnInit() {
    }

}
