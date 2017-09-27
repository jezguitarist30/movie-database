import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appNewHighlightClick]'
})
export class AppNewHighlightClickDirective {

    constructor(private el: ElementRef) {

    }

    @HostBinding('style.color') elementColor = 'green';

    @HostListener('click') elementClick() {
        this.el.nativeElement.style.backgroundColor = 'blue';
        this.elementColor = 'red';
    }

    @HostListener('mouseleave') elementMouseLeave() {
        this.el.nativeElement.style.backgroundColor = 'red';
        this.elementColor = 'yellow';
    }

}


@Directive({
    selector: '[appNewAppHugeText]'
})
export class AppNewHugeTextDirective {

    constructor(public el: ElementRef) {
        this.el.nativeElement.style.fontSize = '100px';
    }

}
