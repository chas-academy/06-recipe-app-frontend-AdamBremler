import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { List } from 'src/app/models/list';

@Component({
    selector: 'app-list-list-item',
    templateUrl: './list-list-item.component.html',
    styleUrls: ['./list-list-item.component.scss']
})
export class ListListItemComponent implements OnInit {

    @Input() list: List;

    @Output() deleteBtnClicked = new EventEmitter<number>();

    constructor(private listService: ListService) { }

    ngOnInit() {
    }

    deleteList() {
        this.deleteBtnClicked.emit(this.list.id);
    }
}
