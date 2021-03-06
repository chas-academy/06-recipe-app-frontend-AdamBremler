import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './components/recipe-list-item/recipe-list-item.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { LoginComponent } from './components/login/login.component';
import { ListListComponent } from './components/list-list/list-list.component';
import { ListListItemComponent } from './components/list-list-item/list-list-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { ListAdderComponent } from './components/list-adder/list-adder.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        RecipeListComponent,
        RecipeListItemComponent,
        RecipeDetailComponent,
        LoginComponent,
        ListListComponent,
        ListListItemComponent,
        NavbarComponent,
        ListDetailComponent,
        ListAdderComponent,
        SearchbarComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgbModule,
        NgbCollapseModule,
        HttpClientModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
