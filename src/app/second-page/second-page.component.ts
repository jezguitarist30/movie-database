import { Component } from '@angular/core';

@Component({
    selector: 'app-second-page',
    templateUrl: './second-page.component.html',
})

export class SecondPageComponent {

    name: string = 'Jez Reel';

    imgSrc: string = 'https://d1067y8t86k9le.cloudfront.net/wp-content/uploads/2016/04/22150642/angular_js.jpg';

    showAlert() {
        alert('Welcome to Angular');
    }
}
