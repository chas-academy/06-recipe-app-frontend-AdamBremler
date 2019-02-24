import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ListListComponent } from './components/list-list/list-list.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
    // Public routes
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipeListComponent },
    { path: 'recipes/:id', component: RecipeDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // Guarded routes
    { path: 'lists', component: ListListComponent, canActivate: [AuthGuard] },
    { path: 'lists/:id', component: ListDetailComponent, canActivate: [AuthGuard] },

    // Route not found
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
