import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    baseUrl: string = environment.recipeUrl;
    idAndKey: string = environment.recipeIdAndKey;

    constructor(private http: HttpClient) { }

    getRecipes() {
        return this.http.get(`${this.baseUrl}recipes?${this.idAndKey}&requirePictures=true`).pipe(map((data: any) => {
            return data['matches'].map((rec: any) => {
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
        }))
    }

    getRecipe(id: string) {
        return this.http.get(`${this.baseUrl}recipe/${id}?${this.idAndKey}`).pipe(map((rec: any) => {
            return {
                id: rec.id,
                name: rec.name,
                imageUrl: rec.images[0].hostedLargeUrl,
                rating: rec.rating,
                time: rec.totalTimeInSeconds,
                course: rec.attributes.course,
                ingredients: rec.ingredientLines,
                flavors: rec.flavors
            }
        }));
    }
}
