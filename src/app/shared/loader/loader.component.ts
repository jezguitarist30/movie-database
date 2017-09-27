import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {

    @Input() time = 2000;

    showLoader = true;

    constructor() { }

    ngOnInit() {

        setTimeout(() => {
            this.showLoader = false;
        }, this.time);

    }
}
