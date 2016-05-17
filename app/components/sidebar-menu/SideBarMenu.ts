import {Component, OnInit} from '@angular/core';
import {SideBarMenuService} from '../../services/SideBarMenuService';
import MenuItem from '../../models/MenuItem';

@Component({
    selector: 'sidebar-menu',
    template: `
            <div class="list-group" id="sideMenu">
                <a *ngFor="let menuLink of sideBarMenu" href="{{menuLink.link}}" class="list-group-item">
                    {{menuLink.text}}
                </a>
            </div>
            `,
    providers: [
        SideBarMenuService
    ]
})

export class SideBarMenuComponent implements OnInit {
    sideBarMenu: MenuItem[] = [];

    constructor(private _sideBarMenuService: SideBarMenuService) {
    }

    ngOnInit() {
        this._sideBarMenuService.getMenuItems()
            .then(sideBarMenuItems => this.sideBarMenu = sideBarMenuItems);
    }
}
