<script>
export default {
  name: 'MovieCard',
  data(){
    return{

    }
  },
  props:{
    card: Object
  }
}
</script>

<template>
  <!-- <div class="card col-3">


    <div class="name">{{movie.title}}</div>
    <div class="original-name">{{movie.original_title}}</div>
    <div class="language">{{movie.original_language}}</div>
    <div class="vote">{{movie.vote_average}}</div>
  
  </div> -->

  <div class="card col-3">

    <div> {{ card.title || card.name }} </div>

  </div>
  
</template>


<style lang="scss" scoped>

@use '../styles/partials/variables' as *;
@use "../styles/partials/mixins" as *;

.card{
  text-align: center;
  height: 300px;
  margin:10px;
  padding-bottom: 20px;
  position: relative;
  color: black;
}

// .name{

// }

</style>