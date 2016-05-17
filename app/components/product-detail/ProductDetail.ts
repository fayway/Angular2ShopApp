import {Component, Input}   from '@angular/core';
import Product              from '../../models/Product';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/components/product-detail/product-detail.html'
})

export class ProductDetailComponent {
    @Input()
    product: Product;

    selectedQuantity: number = 1;

    addedToCart: boolean = false;

    addToCart() {
        this.addedToCart = true;
    }
}
