import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class SearchService {
  constructor(public http: HttpClient) {};

  getMovies(queryValue): Observable<any> {
    return this.http.get(environment.apiSearchMovie + environment.apiParams + '&query=' + queryValue);
  }

  getSeries(queryValue): Observable<any> {
    return this.http.get(environment.apiSearchTv + environment.apiParams + '&query=' + queryValue);
  }

  getMovieDetails(idProd): Observable<any> { 
    return this.http.get(environment.apiDetailsMovie + idProd + environment.apiParams);
  }

  getSeriesDetails(idProd): Observable<any> {
    return this.http.get(environment.apiDetailsTv + idProd + environment.apiParams);
  }

  getMovieTrailer(idProd): Observable<any> {
    return this.http.get(environment.apiDetailsMovie + idProd + environment.apiVideos + environment.apiParams);
  }

  getTvTrailer(idProd): Observable<any> {
    return this.http.get(environment.apiDetailsTv + idProd + environment.apiVideos + environment.apiParams);
  }
}