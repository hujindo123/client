<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="swiper-slide"><img src="http://gatewang.68v8.com/file/upload/201607/22/10-25-14-37-11.jpg"></swiper-slide>
    <swiper-slide class="swiper-slide"><img src="http://gatewang.68v8.com/file/upload/201607/22/10-22-57-22-11.jpg"></swiper-slide>
    <swiper-slide class="swiper-slide"><img src="http://gatewang.68v8.com/file/upload/201607/22/10-25-14-37-11.jpg"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observeParents: true,
          loop: true
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          // more Swiper configs and callbacks...
          // ...
        }
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-slide
    width 100%
    height auto
    font-size 0
    img
      width 100%
      height 100%
      display inline-block
  .swiper-pagination
    .swiper-pagination-bullet-active
      background: #f63
</style>
