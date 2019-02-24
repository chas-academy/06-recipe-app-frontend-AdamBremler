import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { List } from 'src/app/models/list';

@Component({
    selector: 'app-list-list',
    templateUrl: './list-list.component.html',
    styleUrls: ['./list-list.component.scss']
})
export class ListListComponent implements OnInit {
    lists: List[];

    constructor(private listService: ListService) {}

    ngOnInit() {
        this.listService.getLists().subscribe((data: List[]) => {
            this.lists = data;
        });
    }

}
