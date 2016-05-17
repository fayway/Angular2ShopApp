import {Component, OnInit}          from '@angular/core';
import {RouteParams}                from '@angular/router-deprecated';
import Product                      from '../models/Product';
import {ProductService}             from '../services/ProductService';
import {ProductDetailComponent}     from '../components/product-detail/ProductDetail';

@Component({
    selector: 'product-detail-page',
    template: `
        <product-detail [product]="product"></product-detail>
   `,
    directives: [
        ProductDetailComponent
    ]
})

export class ProductDetailPage implements OnInit {
    product: Product;
    constructor(
        private _productService: ProductService,
        private _routeParams: RouteParams) {
    }
    ngOnInit() {
        let code = this._routeParams.get('code');
        this._productService.getProduct(code)
            .then(product => this.product = product);
    }
}
