import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './services/search.service';
import { Ng2ImgFallbackModule } from 'ng2-img-fallback';

import { AppComponent } from './app.component';
import { MoviesComponent } from './views/movies/movies.component';
import { SeriesComponent } from './views/series/series.component';
import { ResultComponent } from './shared/result/result.component';
import { FavoritesComponent } from './views/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SeriesComponent,
    ResultComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2ImgFallbackModule
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
