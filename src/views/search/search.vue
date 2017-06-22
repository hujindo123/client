<template>
  <div class="search-main">
    <div style="height: 95px; flex: 0 0 95px;position: relative">
      <div class="search-top">
        <i class="icon-back" @click="backPage"></i>
        <div class="search-input">
          <input type="text" placeholder="请输入商家名称">
          <i class="icon-search"></i>
        </div>
      </div>
      <ul class="search-nav">
        <li class="nav-li" @click="shopMethod"><span>商家分类</span><i class="icon-down" :class="{rotate: shop}"></i></li>
        <li class="nav-li" @click="addressMethod"><span>锦江区</span><i class="icon-down" :class="{rotate: address}"></i>
        </li>
        <li class="nav-li" @click="sortMethod"><span>排序</span><i class="icon-down" :class="{rotate: sort}"></i></li>
      </ul>
    </div>
    <ul class="search-select" v-if="address">
      <li class="select-li">全部 <span>12</span></li>
      <li class="select-li">丽人 <span>56</span></li>
      <li class="select-li">美食餐饮 <span>123</span></li>
      <li class="select-li">休闲娱乐 <span>56</span></li>
    </ul>
    <ul class="search-select" v-if="sort">
      <li class="select-li">点击率</li>
      <li class="select-li">距离</li>
    </ul>
    <v-scroll v-if="shop"></v-scroll>
    <v-list v-if="list"></v-list>
  </div>
</template>

<script type="text/ecmascript-6">
  import scroll from 'components/scroll/scroll';
  import list from 'components/list/list';
  export default {
    data() {
      return {
        list: true,
        shop: false,
        address: false,
        sort: false
      };
    },
    methods: {
      backPage() {
        this.$router.go(-1);
      },
      shopMethod() {
        this.shop = !this.shop;
        this.address = false;
        this.sort = false;
        this.list = false;
      },
      addressMethod() {
        this.address = !this.address;
        this.shop = false;
        this.sort = false;
        this.list = false;
      },
      sortMethod() {
        this.sort = !this.sort;
        this.address = false;
        this.shop = false;
        this.list = true;
      }
    },
    computed: {
      showList() {
        console.log(1);
      }
    },
    components: {
      'v-scroll': scroll,
      'v-list': list
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl";
  html, body
    height 100%

  .search-main
    width 100%
    height 100%
    display flex
    flex-direction column
    .search-top
      width 100%
      height 45px
      flex: 0 0 45px
      display: flex
      background #ff6633
      box-sizing border-box
      .icon-back
        width 40px
        height 45px
        line-height 45px
        flex 0 0 40px
        vertical-align top
        text-align center
        color #fff
        font-size 18px
      .search-input
        flex 1
        height 28px
        padding-left 10px
        background #fff
        box-sizing border-box
        margin 8px
        display flex
        input
          flex 1
          border 0
          outline none
          background #fff
        i
          width 43px
          height 28px
          flex 0 0 43px
          line-height 28px
          font-size 16px
          font-weight bold
          color #b00706
          background #f8dbca
    .search-nav
      width 100%
      display flex
      flex 0 0 50px
      position relative
      overflow hidden
      .rotate
        transform rotate(180deg) !important
      .nav-li
        height 50px
        line-height 50px
        flex 1
        position relative
        &:nth-child(1), &:nth-child(2)
          border-bottom-left()
        &:nth-child(3)
          border-bottom-1px()
        span
          font-weight 400
        i
          font-size 24px
          position: absolute;
          margin-left: 0;
          line-height: 50px;
          color #b3aea5
    .search-select
      width 100%
      position relative
      text-align left
      flex 0 0 45px
      .select-li
        height 45px
        line-height 45px
        padding-left 30px
        color #666
        position relative
        font-size 12px
        &:nth-child(odd)
          background #fff
        &:nth-child(even)
          background #f8f8f8
        span
          position absolute
          right 10px
          display inline-block
          text-align right
</style>
