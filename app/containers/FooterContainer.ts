import {Component}          from '@angular/core';
import {FooterComponent}    from '../components/footer/Footer';

@Component({
    selector: 'footer-container',
    template: `
        <footer></footer>
   `,
    directives: [
        FooterComponent
    ]
})

export class FooterContainer {}
