import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { List } from 'src/app/models/list';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-list-list',
    templateUrl: './list-list.component.html',
    styleUrls: ['./list-list.component.scss']
})
export class ListListComponent implements OnInit {
    lists: List[];

    createListForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    nameInput: string;

    constructor(
        private listService: ListService,
        private formBuilder: FormBuilder,
    ) {}

    ngOnInit() {
        this.listService.getLists().subscribe((data: List[]) => {
            this.lists = data;
        });

        this.createListForm = this.formBuilder.group({
            name: ['', Validators.required]
        });
    }

    // Getter for easy access from template
    get f() { return this.createListForm.controls; }

    createListSubmit() {
        this.submitted = true;

        if (this.createListForm.invalid) {
            return;
        }

        this.loading = true;
        this.listService.createList(this.f.name.value)
            .pipe(first())
            .subscribe(
                (data: any) => {
                    this.loading = false;
                    
                    if(data.success) {
                        this.createListForm.reset();
                        this.lists.push(new List(data.list.id, data.list.name, data.list.recipes));
                    }
                },
                (error: any) => {
                    this.error = error;
                    this.loading = false;
                });
    }

}
