<script>
import { store } from '../data/store'
export default {
  name: 'AppSearch',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="search-container">
    <div class="row">

      <div class="col-auto">
        <input
        @keyup.enter="$emit('starSearch')" 
        v-model.trim="store.apiParams.movieShowSearch" type="text" class="form-control" placeholder="Search Movie or TV Show">
      </div>

      <div class="col-auto">
        <select
        v-model="store.type" 
        class="form-select">
          <option value="All">All</option>
          <option value="Movies">Movies</option>
          <option value="TV Shows">TV Shows</option>
        </select>
      </div>


      <div class="col-auto">
        <button @click="$emit('startSearch')" class="btn jt-btn px-4">Search</button>
      </div>

    </div>
  </div>
  
</template>


<style lang="scss" scoped>

@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.jt-btn{
  background-color: $primary-color;
  color: white;
  &:hover{
    background-color: $primary-color;
    color: white;
    opacity: .6;
  }
}


</style>