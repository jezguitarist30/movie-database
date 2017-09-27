import { Component, OnInit } from '@angular/core';

import { Movies } from '../movies.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Array<Movies> = new Array<Movies>();
  sort: string = 'asc';

  constructor() { }

  ngOnInit() {
      this.loadMovies();
  }

  loadMovies() {

    this.movieList = [
      {
        Title: 'despicable me 3', Synopsis: 'Blah Bla Bla', Rating: 7,
        Genre: 'Animation', ShowingDate: new Date(2017, 7, 30), Revenue: 50032, Poster: ''
      },
      {
        Title: 'Insidious', Synopsis: 'Blah Bla Bla', Rating: 5,
        Genre: 'Horror', ShowingDate: new Date(2017, 8, 11), Revenue: 12345, Poster: ''
      },
      {
        Title: 'Power Rangers', Synopsis: 'Blah Bla Bla', Rating: 8,
        Genre: 'Action Adventure', ShowingDate: new Date(2017, 7, 9), Revenue: 6577, Poster: ''
      },
      {
        Title: 'The Exorcist', Synopsis: 'Blah Bla Bla', Rating: 5,
        Genre: 'Horror', ShowingDate: new Date(2017, 5, 25), Revenue: 9833, Poster: ''
      },
      {
        Title: 'The Notebook', Synopsis: 'Blah Bla Bla', Rating: 10,
        Genre: 'Drama', ShowingDate: new Date(2017, 3, 15), Revenue: 23577, Poster: ''
      },
      {
        Title: 'Sassy Girl', Synopsis: 'Blah Bla Bla', Rating: 5,
        Genre: 'Romantic Comedy', ShowingDate: new Date(2017, 2, 3), Revenue: 123432, Poster: ''
      },
    ];


  }
}
