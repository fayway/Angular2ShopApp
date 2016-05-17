import {Component}              from '@angular/core';
import {NavBarMenuComponent}    from '../components/navbar-menu/NavbarMenu';

@Component({
    selector: 'navbar-container',
    template: `
        <navbar-menu></navbar-menu>
   `,
    directives: [
        NavBarMenuComponent
    ]
})

export class NavBarContainer {}
