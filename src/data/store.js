import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  // apiUrlTvShows: 'https://api.themoviedb.org/3/search/tv/',
  apiParams: {
    apiKey: '06a0961b60d2024ca572796f493b8635',
    movieShowSearch: '',
    language: 'it-IT',
  },
  moviesList: [],
  tvShowsList: [],
  type: '',
})


//una sola card sia movie che show perché è inutile scrivere 2 volte lo stesso code