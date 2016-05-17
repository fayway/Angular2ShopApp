import {Component}                  from '@angular/core';
import {ProductsCarouselComponent}  from '../components/products-carousel/ProductsCarousel';
import {ProductsContainer}          from '../containers/ProductsContainer';

@Component({
    selector: 'home-page',
    template: `
        <products-carousel></products-carousel>
        <products-container></products-container>
   `,
    directives: [
        ProductsCarouselComponent,
        ProductsContainer
    ]
})

export class HomePage {}
