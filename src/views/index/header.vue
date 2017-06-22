<template>
  <div>
    <div class="header">
      <div v-if="!inputSearch">
        <div class="search-input">
          <div class="search-address">成都</div>
          <div class="search-div" @click="inputSearch=true">
            <i class="icon-search"></i>
            输入商户名、地点
          </div>
          <div class="blank"></div>
        </div>
        <v-swiper></v-swiper>
        <v-nav></v-nav>
      </div>
      <transition name="city-fade">
        <div class="city-search" v-if="inputSearch">
          <div class="head-cnt">
            <div class="search-input">
              <input type="text">
              <i class="search icon-search"></i>
            </div>
            <div class="cancel" @click="inputSearch=false">取消</div>
          </div>
          <v-city></v-city>
        </div>
      </transition>
      <h1>
        <div class="san"></div>
        猜你喜欢
      </h1>
      <v-list></v-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import swiper from 'components/swiper/swiper';
  import city from './city';
  import nav from './nav';
  import list from 'components/list/list';
  export default {
    data() {
      return {
        inputSearch: false
      };
    },
    methods: {
      inputSearchs() {
        this.inputSearch = true;
        console.log(this.inputSearch);
      }
    },
    components: {
      'v-swiper': swiper,
      'v-nav': nav,
      'v-city': city,
      'v-list': list
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/fonts.css";
  @import "../../common/css/mixin.styl";
  .header
    width 100%
    min-height 100%
    height auto
    position relative
    overflow hidden
    .search-input
      position absolute
      z-index 2
      width 100%
      display flex
      flex-grow row
      top 10px
      left 0
      height 30px
      line-height 30px
      .search-address
        width 48px
        flex 0 0 48px
        margin-right 5px
        color #fff
        font-size 14px
      .search-div
        width 100%
        background #fff
        border-radius 15px
        color #bdbdbd
        text-align left
        font-size 12px
        .icon-search
          display inline-block
          margin-left 10px
          font-size 11px
          height 15px
          vertical-align top
          margin-top 9px
          color #818181
      .blank
        width 25px
        flex 0 0 25px

    .city-fade-enter-active
      transition all 0.3s ease
    .city-fade-leave-active
      transition all 0s ease
    .city-fade-leave-active, .city-fade-enter
      transform translateY(370px)
      opacity 0
    h1
      height 30px
      line-height 30px
      text-indent 1.7em
      background #efeff5
      font-size 14px
      text-align left
      color #777777
      border-bottom-top()
      .san
        width 10px
        height 10px
        position absolute
        background #fff
        z-index 100
        background-image url("../../../static/image/icon-triangle.png")
        background-position left top
        background-repeat no-repeat
        background-size contain
    .city-search
      width 100%
      min-height 100%
      background #fff
      position relative
      top 0
      left 0
      z-index 2
      .head-cnt
        position relative
        padding 8px
        height 30px
        display flex
        .search-input
          position relative
          flex 1
          display flex
          background #f0f0f0
          border-radius 15px
          overflow hidden
          margin-right 20px
          top 0
          input
            flex 1
            outline none
            background #f0f0f0
            padding-left 10px
          .search
            width 30px
            line-height 30px
            margin-right 8px
        .cancel
          width 30px
          flex 0 0 30px
          line-height 30px
          font-color()
</style>
