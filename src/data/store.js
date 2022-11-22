import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiParams: {
    api_key: '06a0961b60d2024ca572796f493b8635',
    query: '',
    language: '',
  },
  type: '',
  movie: [],
  tv: [],
  imageUrl: "http://image.tmdb.org/t/p/w500",
  flagClass: "fi fi-"
})