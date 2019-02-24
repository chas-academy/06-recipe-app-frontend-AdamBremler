import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-list-list-item',
    templateUrl: './list-list-item.component.html',
    styleUrls: ['./list-list-item.component.scss']
})
export class ListListItemComponent implements OnInit {

    @Input() list: any;

    constructor() { }

    ngOnInit() {
    }

}
