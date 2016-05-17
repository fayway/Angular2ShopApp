import {Injectable}         from '@angular/core';
import BestSellingProducts  from '../mocks/BestSellingProducts';

@Injectable()
export class ProductService {
    getBestSellingProducts() {
        return Promise.resolve(BestSellingProducts);
    }
    searchBestSellingProducts(keyword: string) {
        return Promise.resolve(BestSellingProducts.filter(product => {
            return product.code.toLowerCase().includes(keyword.toLowerCase())  ||
                product.name.toLowerCase().includes(keyword.toLowerCase()) ||
                product.description.toLowerCase().includes(keyword.toLowerCase());
        }));
    }
    getProduct(code: string) {
        return Promise.resolve(BestSellingProducts.find(product => product.code === code));
    }
}
