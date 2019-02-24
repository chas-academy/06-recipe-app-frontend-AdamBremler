import { Component, OnInit, Input } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { List } from 'src/app/models/list';
import { Recipe } from 'src/app/models/recipe';

@Component({
    selector: 'app-list-adder',
    templateUrl: './list-adder.component.html',
    styleUrls: ['./list-adder.component.scss']
})
export class ListAdderComponent implements OnInit {
    lists: List[];

    isCollapsed: boolean = true;

    @Input() activeRecipe: Recipe;

    constructor(private listService: ListService) {}

    ngOnInit() {
        this.listService.getLists().subscribe((data: List[]) => {
            this.lists = data;
        });
    }

    addToList(id: number) {
        let selectedList: List = this.lists.filter((list: List) => list.id === id)[0];
        
        // Cancel if recipe already in list
        if(selectedList.recipes.includes(this.activeRecipe.id)) {
            return;
        }
        
        selectedList.recipes.push(this.activeRecipe.id);
        
        this.listService.updateList(selectedList).subscribe((data: any) => {
            if(!data.success) {
                alert('Could not add recipe to list');
            }
        })
        
        this.isCollapsed = true;
    }

}
