import {Component}              from '@angular/core';
import {LogoComponent}          from '../components/logo/Logo';
import {SideBarMenuComponent}   from '../components/sidebar-menu/SideBarMenu';

@Component({
    selector: 'sidebar-container',
    template: `
        <logo></logo>
        <sidebar-menu></sidebar-menu>
   `,
    directives: [
        LogoComponent,
        SideBarMenuComponent
    ]
})

export class SideBarContainer {}
