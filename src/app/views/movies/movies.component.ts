import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {
  constructor(public searchService: SearchService) {};
  movies = [];
  hasResults: boolean = true;

  ngOnInit() {
    this.getMoviesList('star wars');
  }

  getMoviesList(queryValue) {
    return this.searchService.getMovies(queryValue).subscribe(
      result => {
        this.movies = result.results,
        this.hasResults = Boolean(result.total_results)
      }
    );
  }
}