import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';
import { MoviesRouterModule } from './movies.router.module';

// Components
import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MoviesRouterModule
  ],
  declarations: [
    MoviesComponent,
    MovieListComponent,       
  ],
  exports: [
    MovieListComponent
  ]
})
export class MoviesModule { }
