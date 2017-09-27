import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Component
import { LoaderComponent } from './loader/loader.component';

// Directives
import { HugeTextDirective } from './directives/highlight-text.directive';
import { HighlightClickDirective } from './directives/highlight-click.directive';
import { AppNewHighlightClickDirective, AppNewHugeTextDirective } from './directives/mix.directive';

// Pipes
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
        LoaderComponent,
        HugeTextDirective,
        HighlightClickDirective,

        AppNewHighlightClickDirective,
        AppNewHugeTextDirective,
        EllipsisPipe,
        OrderByPipe,
        MovieFilterPipe,
        NavigationComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: [
        LoaderComponent,
        HugeTextDirective,
        HighlightClickDirective,
        AppNewHighlightClickDirective,
        AppNewHugeTextDirective,
        EllipsisPipe,
        OrderByPipe,
        MovieFilterPipe,
        NavigationComponent
    ]
})

export class SharedModule {

}
