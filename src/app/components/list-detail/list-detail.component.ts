import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';
import { List } from 'src/app/models/list';

@Component({
    selector: 'app-list-detail',
    templateUrl: './list-detail.component.html',
    styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
    list: List;

    constructor(
        private route: ActivatedRoute,
        private listService: ListService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.listService.getList(params.id).subscribe((list: List) => {
                this.list = list;
            });
        });
    }

}
