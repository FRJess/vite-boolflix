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
//toadd: director - crew - year - popular tvshows - filter?
//toremove: flag (che trovo inutile)
//toimprove: cards usando slider come jumbo


//si può ordinare il risultato per data o voto o altro?


// computed:{
//   rating(){
//     return this.card.vote_average / 2;
//   },
// }