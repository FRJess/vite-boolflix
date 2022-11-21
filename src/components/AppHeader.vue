<script>
import AppSearch from './AppSearch.vue';

export default {
  name: 'AppHeader',

  components:{
    AppSearch,
  }

}
</script>

<template>
  <div class="jt-container p-3">
    <img src="../assets/img/logo.png" alt="logo Jessflix">
    <AppSearch/>
  </div>

  
</template>

<style lang="scss" scoped>

@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.jt-container{
  width: 100%;

  @include positionFlex('between');
  @include centerFlex('vertical');
}

</style>