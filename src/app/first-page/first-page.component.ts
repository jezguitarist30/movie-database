import { Component } from '@angular/core';

@Component({
    selector: 'app-first-page',
    templateUrl: './first-page.component.html',
    styles: [`
        .active {
            color: red;
        }
    `]
})

export class FirstPageComponent {

    getSum(sum) {
        alert('the sum is: ' + sum);
    }

    getProduct(product) {
        alert('the product is: ' + product);
    }
}
