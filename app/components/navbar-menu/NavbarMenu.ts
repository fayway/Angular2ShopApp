import {Component, OnInit} from '@angular/core';
import {NavBarMenuService} from '../../services/NavBarMenuService';
import MenuItem from '../../models/MenuItem';

@Component({
    selector: 'navbar-menu',
    templateUrl: 'app/components/navbar-menu/navbar-menu.html',
    providers: [
        NavBarMenuService
    ]
})

export class NavBarMenuComponent implements OnInit {
    navBarMenu: MenuItem[] = [];

    constructor(private _navBarMenuService: NavBarMenuService) {
    }

    ngOnInit() {
        this._navBarMenuService.getMenuItems()
            .then(navBarMenuItems => this.navBarMenu = navBarMenuItems);
    }
}
