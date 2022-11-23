import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiParams: {
    api_key: '06a0961b60d2024ca572796f493b8635',
    query: '',
    language: '',
  },
  apiTrendingUrl: 'https://api.themoviedb.org/3/trending/movie/week?api_key=06a0961b60d2024ca572796f493b8635',
  type: '',
  isOverviewClicked: false,
  movie: [],
  tv: [],
  trending: [],
  imageUrl: "http://image.tmdb.org/t/p/w500",
  flagClass: "fi fi-",
  isLoadMovie: false,
  isLoadTV: false,
  isLoadTrend: false,
})

//tofix: keyup non funziona in AppSearch - loader non appare
//toadd: director - crew - year - popular tvshows
//toimprove: cards usando slider