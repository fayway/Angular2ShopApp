import {Component, OnInit}          from '@angular/core';
import Product                      from '../models/Product';
import {ProductService}             from '../services/ProductService';
import {ProductsSearchComponent}    from '../components/products-search/ProductsSearch';
import {ProductsGridComponent}      from '../components/products-grid/ProductsGrid';

@Component({
    selector: 'products-container',
    template: `
        <products-search (onSearch)="onSearch($event)"></products-search>
        <products-grid [bestSellingProducts]="bestSellingProducts"></products-grid>
   `,
    directives: [
        ProductsSearchComponent,
        ProductsGridComponent
    ]
})

export class ProductsContainer implements OnInit {
    bestSellingProducts: Product[] = [];

    constructor(private _productService: ProductService) {
    }

    ngOnInit() {
        this._productService.getBestSellingProducts()
            .then(bestSellingProducts => this.bestSellingProducts = bestSellingProducts);
    }

    onSearch(keyword: string) {
        this._productService.searchBestSellingProducts(keyword)
            .then(filtredBestSellingProducts => this.bestSellingProducts = filtredBestSellingProducts);
    }

}
