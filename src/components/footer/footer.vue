<template>
  <ul class="footer">
    <li class="footer-nav" @click="change(1)">
      <router-link to="/" class="home" :class="{'router-link-exact-active': first}">
        <i class="icon-shop"></i>
        <span>首页</span>
      </router-link>
    </li>
    <li class="footer-nav" @click="change(2)">
      <router-link :to="{path: '/details',query:{ areaid: 3}}" class="sxf">
        <i class="icon-news"></i>
        <span>盛熙范</span>
      </router-link>
    </li>
    <li class="footer-nav" @click="change(3)">
      <transition name="list-fade">
        <ul class="about" v-if="listShow">
          <li class="list-li">
            <router-link to="/download">下载APP</router-link>
          </li>
          <li class="list-li">
            <router-link to="/b">ABCD</router-link>
          </li>
          <li class="list-li">
            <router-link to="/c">ABCE</router-link>
          </li>
        </ul>
      </transition>
      <span>
        <a :class="{'router-link-exact-active': onfocus}">
          <i class="icon-about"></i>
          <span>关于我们</span>
        </a>
      </span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        listShow: false
      };
    },
    created() {
      console.log(this.$router.path);
    },
    computed: {
      onfocus() {
        if (this.$route.path === '/download' || this.$route.path === '/b' || this.$route.path === '/c') {
          return true;
        }
      },
      first() {
        if (this.$route.path !== '/home') {
          return false;
        }
      }
    },
    methods: {
      change(t) {
        if (t > 1) {
          this.first = false;
        }
        t < 3 ? this.listShow = false : this.listShow = !this.listShow;
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl";
  .footer
    width 100%
    height 50px
    line-height 50px
    display flex
    position fixed
    bottom 0
    left 0
    font-size 14px
    z-index 1000
    background #fff
    .footer-nav
      position relative
      flex 1
      text-align center
      border-top-1px()
      .about
        width 100%
        height 150px
        position absolute
        background #f5f5f5
        top -150px
        &.list-fade-enter-active, list-fade-leave-active
          transition all 0.2s ease
        &.list-fade-enter, list-fade-leave-active
          opacity 0
          transform translateY(10px)
        .list-li
          border-del-bottom-1px()
      a
        height 40px
        width 100%
        display inline-block
        font-size 14px
        line-height 40px
        background-size 19px 15px
        background-repeat no-repeat
        background-position center 10px
        &.router-link-exact-active
          color #f63
        i
          display block
          margin 7px 0 0 0
          font-size 19px
        span
          display block
          height 25px
          line-height 18px

</style>
