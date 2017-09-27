import { Component, ViewChild } from '@angular/core';

import { MovieListComponent } from './movies/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild(MovieListComponent) myMovieList: MovieListComponent;

  loadMyMovies() {
    this.myMovieList.loadMovies();
  }

}
