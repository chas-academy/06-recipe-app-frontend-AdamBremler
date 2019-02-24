import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
    searchForm: FormGroup;

    isCollapsed: boolean = true;

    @Output() searchEvent: EventEmitter<string[]> = new EventEmitter();

    filters: Object[] = [
        {
            name: 'Dairy Free',
            param: 'allowedAllergy[]=396^Dairy-Free',
            checked: false
        },
        {
            name: 'Egg Free',
            param: 'allowedAllergy[]=397^Egg-Free',
            checked: false
        },
        {
            name: 'Gluten Free',
            param: 'allowedAllergy[]=393^Gluten-Free',
            checked: false
        },
        {
            name: 'Peanut Free',
            param: 'allowedAllergy[]=394^Peanut-Free',
            checked: false
        },
        {
            name: 'Seafood Free',
            param: 'allowedAllergy[]=398^Seafood-Free',
            checked: false
        },
        {
            name: 'Sesame Free',
            param: 'allowedAllergy[]=399^Sesame-Free',
            checked: false
        },
        {
            name: 'Soy Free',
            param: 'allowedAllergy[]=400^Soy-Free',
            checked: false
        },
        {
            name: 'Sulfite Free',
            param: 'allowedAllergy[]=401^Sulfite-Free',
            checked: false
        },
        {
            name: 'Tree Nut Free',
            param: 'allowedAllergy[]=395^Tree+Nut-Free',
            checked: false
        },
        {
            name: 'Wheat Free',
            param: 'allowedAllergy[]=392^Wheat-Free',
            checked: false
        },
        {
            name: 'Lacto ovo vegetarian',
            param: 'allowedDiet[]=387^Lacto-ovo+vegetarian',
            checked: false
        },
        {
            name: 'Vegan',
            param: 'allowedDiet[]=386^Vegan',
            checked: false
        },
        {
            name: 'Ovo vegetarian',
            param: 'allowedDiet[]=389^Ovo+vegetarian',
            checked: false
        },
        {
            name: 'Pescetarian',
            param: 'allowedDiet[]=390^Pescetarian',
            checked: false
        },
        {
            name: 'Low FODMAP',
            param: 'allowedDiet[]=408^Low+FODMAP',
            checked: false
        },
        {
            name: 'Lacto vegetarian',
            param: 'allowedDiet[]=388^Lacto+vegetarian',
            checked: false
        },
        {
            name: 'Ketogenic',
            param: 'allowedDiet[]=406^Ketogenic',
            checked: false
        },
        {
            name: 'Main Dishes',
            param: 'allowedCourse[]=course^course-Main+Dishes',
            checked: false
        },
        {
            name: 'Desserts',
            param: 'allowedCourse[]=course^course-Desserts',
            checked: false
        },
        {
            name: 'Side Dishes',
            param: 'allowedCourse[]=course^course-Side+Dishes',
            checked: false
        },
        {
            name: 'Lunch and Snacks',
            param: 'allowedCourse[]=course^course-Lunch+and+Snacks',
            checked: false
        },
        {
            name: 'Appetizers',
            param: 'allowedCourse[]=course^course-Appetizers',
            checked: false
        },
        {
            name: 'Salads',
            param: 'allowedCourse[]=course^course-Salads',
            checked: false
        },
        {
            name: 'Breads',
            param: 'allowedCourse[]=course^course-Breads',
            checked: false
        },
        {
            name: 'Breakfast and Brunch',
            param: 'allowedCourse[]=course^course-Breakfast+and+Brunch',
            checked: false
        },
        {
            name: 'Soups',
            param: 'allowedCourse[]=course^course-Soups',
            checked: false
        },
        {
            name: 'Beverages',
            param: 'allowedCourse[]=course^course-Beverages',
            checked: false
        },
        {
            name: 'Condiments and Sauces',
            param: 'allowedCourse[]=course^course-Condiments+and+Sauces',
            checked: false
        },
        {
            name: 'Cocktails',
            param: 'allowedCourse[]=course^course-Cocktails',
            checked: false
        }
    ];

    constructor(
        private formBuilder: FormBuilder,
        private recipeService: RecipeService
    ) {}

    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            searchTerm: ['', Validators.required]
        });
    }

    toggleFilter(event) {
        let clickedFilter: Object = this.filters.filter((filter: any) => filter.param === event.target.id)[0];

        clickedFilter['checked'] = event.target.checked;

        this.search();
    }

    // Getter for easy access
    get f() { return this.searchForm.controls; }

    search() {
        let selectedFilters = this.filters.filter((filter: Object) => filter['checked']);
        let params = selectedFilters.map((filter: Object) => filter['param']);

        this.searchEvent.emit([`q=${this.f.searchTerm.value}`, ...params]);
    }

}
