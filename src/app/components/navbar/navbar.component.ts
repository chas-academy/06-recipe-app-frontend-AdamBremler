import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    isCollapsed: boolean = true;

    currentUser: User;

    constructor(private authenticationService: AuthenticationService) {}

    ngOnInit() {
        this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user
        });
    }

}
