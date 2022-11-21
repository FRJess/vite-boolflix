import { reactive } from "vue";

export const store = reactive({
  apiUrlMovies: 'https://api.themoviedb.org/3/search/movie/?api-key',
  apiKey: '06a0961b60d2024ca572796f493b8635',
  movieShowSearch: '',
  moviesShowsList: [],
})
