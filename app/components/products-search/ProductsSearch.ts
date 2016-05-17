import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'products-search',
    template: `
        <div class="row">
            <div class="col-md-4 col-md-offset-8">
                <div style="margin-bottom: 10px">
                    <input #keyword (keyup.enter)="search(keyword.value)" type="text" placeholder="I'm shopping for...">
                    <a (click)="search(keyword.value)" class="btn btn-primary">Search</a>
                </div>
            </div>
        </div>
    `
})

export class ProductsSearchComponent {
    @Output() onSearch:EventEmitter<string> = new EventEmitter();

    search(keyword:string) {
        this.onSearch.emit(keyword);
    }
}
