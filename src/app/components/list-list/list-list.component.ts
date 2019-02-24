import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-list',
    templateUrl: './list-list.component.html',
    styleUrls: ['./list-list.component.scss']
})
export class ListListComponent implements OnInit {
    lists: any[];

    constructor() {}

    ngOnInit() {
        this.lists = [
            {
                id: 1,
                name: 'My favorites',
                recipes: ['Simple-Skillet-Green-Beans-2352743', 'Simple-Skillet-Green-Beans-2352743']
            },
            {
                id: 2,
                name: 'My other list!!!',
                recipes: ['Simple-Skillet-Green-Beans-2352743']
            }
        ]
    }

}
