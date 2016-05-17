import {Component, Input}   from '@angular/core';
import {Router}             from '@angular/router-deprecated';
import Product              from '../../models/Product';

@Component({
    selector: 'products-grid',
    template: `
        <div>
            <div *ngFor="let product of bestSellingProducts" class="col-sm-4 col-lg-4 col-md-4">
                <div class="thumbnail">
                    <a (click)="gotoDetail(product, $event)" href="#">
                        <img src="{{product.smallImage}}">
                    </a>
                    <div class="caption">
                        <h4 class="pull-right">$ {{product.price}}</h4>
                        <h4>
                            <a (click)="gotoDetail(product, $event)" href="#">{{product.name}}</a>
                        </h4>
                        <p>{{product.description}}</p>
                        </div>
                    <div class="ratings">
                        <p class="pull-right">15 reviews</p>
                        <p>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `
})

export class ProductsGridComponent {
    @Input()
    bestSellingProducts: Product[];
    constructor(
        private _router: Router
    ) { }
    gotoDetail(product: Product, event) {
        event.preventDefault();
        let link = ['ProductDetail', { code: product.code }];
        this._router.navigate(link);
    }
}
