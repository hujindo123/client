<template>
  <div id="app">
    <v-footer></v-footer>
    <router-view></router-view>
  </div>
</template>

<script>
  import footer from './components/footer/footer';
  export default {
    components: {
      'v-footer': footer
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/css/index.styl";
  #app
    height 100%
    color #a9a9a9
</style>
