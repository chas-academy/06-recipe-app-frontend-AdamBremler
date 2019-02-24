import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { AuthenticationService } from './authentication.service';

import { map } from 'rxjs/operators';
import { List } from '../models/list';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    baseUrl: string = environment.apiUrl;

    constructor(private http: HttpClient) {}

    private getListFromObj(obj) {
        return new List(obj.id, obj.name, obj.recipes);
    }

    getLists() {
        return this.http.get(`${this.baseUrl}lists`).pipe(map((data: any[]) => {
            return data.map(obj => {
                return this.getListFromObj(obj);
            });
        }));
    }

    getList(id: number) {
        return this.http.get(`${this.baseUrl}lists/${id}`).pipe(map((obj: any) => {
            return this.getListFromObj(obj);
        }));
    }

    createList(name: string) {
        return this.http.post(`${this.baseUrl}lists`, { name });
    }
}
