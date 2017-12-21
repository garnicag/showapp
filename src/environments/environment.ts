//TheMovieDB API keys
const API_KEY = '648ad8542737e23f6cfadc33be2ebfda',
      API_URL = 'https://api.themoviedb.org/3';

export const environment = {
  production: false,

  //TheMovieDB API details
  apiParams: '?api_key=' + API_KEY + '&language=en-US',
  
  apiSearchMovie: API_URL + '/search/movie',
  apiDetailsMovie: API_URL + '/movie/',
  
  apiSearchTv: API_URL + '/search/tv',
  apiDetailsTv: API_URL + '/tv/',

  apiPosterPath: 'https://image.tmdb.org/t/p/w500/'
};
