import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    baseUrl: string = environment.recipeUrl;
    idAndKey: string = environment.recipeIdAndKey;

    constructor(private http: HttpClient) { }

    getRecipes() {
        //return this.http.get(`${this.baseUrl}recipes?${this.idAndKey}&requirePictures=true`);
        return this.http.get(`${this.baseUrl}recipes`);
    }

    getRecipe(id: string) {
        return this.http.get(`${this.baseUrl}recipe/${id}`);
    }
}
