import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent implements OnInit {
  movies = [];
  series = [];
  hasResultsMovies: boolean = false;
  hasResultsSeries: boolean = false;

  ngOnInit() {
    this.getMoviesList();
    this.getSeriesList();
  }

  ngDoCheck() {
    this.getMoviesList();
    this.getSeriesList();
  }

  getMoviesList() {
    this.movies = JSON.parse(localStorage.getItem('favMovies'));

    if (this.movies !== null && this.movies.length > 0) {
      this.hasResultsMovies = true;
    } else {
      this.hasResultsMovies = false;
    }
  }

  getSeriesList() {
    this.series = JSON.parse(localStorage.getItem('favSeries'));

    if (this.series !== null && this.series.length > 0) {
      this.hasResultsSeries = true;
    } else {
      this.hasResultsSeries = false;
    }
  }
}