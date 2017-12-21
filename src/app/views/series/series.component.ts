import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html'
})
export class SeriesComponent implements OnInit {
  constructor(public searchService: SearchService) {};
  series = [];
  hasResults: boolean = true;

  ngOnInit() {
    this.getSeriesList('star wars');
  }

  getSeriesList(queryValue) {
    return this.searchService.getSeries(queryValue).subscribe(
      result => {
        this.series = result.results,
        this.hasResults = Boolean(result.total_results)
      }
    );
  }
}