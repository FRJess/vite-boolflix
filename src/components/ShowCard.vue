<script>
export default {
  name: 'ShowCard',
  data(){
    return{

    }
  },
  props:{
    show: Object
  }
}
</script>

<template>
  <div class="card col-3">


    <div class="name">{{show.name}}</div>
    <div class="original-name">{{show.original_name}}</div>
    <div class="language">{{show.original_language}}</div>
    <div class="vote">{{show.vote_average}}</div>
  
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