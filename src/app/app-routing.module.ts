import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ListListComponent } from './components/list-list/list-list.component';

const routes: Routes = [
    // Public routes
    { path: '', component: RecipeListComponent },
    { path: 'recipes/:id', component: RecipeDetailComponent },
    { path: 'login', component: LoginComponent },

    // Guarded routes
    { path: 'lists', component: ListListComponent },

    // Route not found
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
