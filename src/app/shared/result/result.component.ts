import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { SearchService } from '../../services/search.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent {
  @Input() idProd: string;
  @Input() prodType: string;

  releaseDate: string;
  runtimeFormated: string;
  genre: string;
  poster: string;
  details = [];
  isFavorite: boolean;

  constructor(public searchService: SearchService) {};
  
  ngOnInit() {
    this.getDetails(this.idProd, this.prodType);
    this.isFavorite = this.checkFav(this.idProd, this.prodType);
  }

  getDetails(idProd, prodType) {
    if (prodType === 'typeMovie') {
      return this.searchService.getMovieDetails(idProd).subscribe(
        result => {
          this.details = result,
          this.runtimeFormated = moment().hours(0).minutes(0).add(result.runtime, 'minutes').format('hh[h] mm[min]'),
          this.releaseDate = moment(result.release_date).format("MMM Do YYYY"),
          this.genre = result.genres,
          this.poster = environment.apiPosterPath + result.poster_path
        }
      );
    } else if (prodType === 'typeSeries') {
      return this.searchService.getSeriesDetails(idProd).subscribe(
        result => {
          this.details = result,
          this.poster = environment.apiPosterPath + result.poster_path
          //this.runtimeFormated = moment().hours(0).minutes(0).add(result.episode_run_time, 'minutes').format('hh[h] mm[min]')
        }
      );
    }
  }

  toggleFav() {
    let typeList = "favMovies";
    
    if (this.prodType === 'typeSeries') {
      typeList = "favSeries";
    }

    let oldItems = JSON.parse(localStorage.getItem(typeList)) || [];
    let index = oldItems.indexOf(this.idProd);

    if (index > -1) {
      oldItems.splice(index, 1);
      this.isFavorite = false;
    } else {
      oldItems.push(this.idProd);
      this.isFavorite = true;
    }

    localStorage.setItem(typeList, JSON.stringify(oldItems));
  }

  checkFav(idProd, prodType) {
    let typeList = "favMovies";
    
    if (this.prodType === 'typeSeries') {
      typeList = "favSeries";
    }

    let favItems = JSON.parse(localStorage.getItem(typeList)) || [];
    let index = favItems.indexOf(idProd);

    if (index > -1) {
      return true;
    }
  }

}