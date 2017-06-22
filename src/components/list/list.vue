<template>
  <ul class="list" v-scroll="More" ref="box">
    <li>
      <router-link :to="{path: '/details',query:{ areaid: 3}}">
        <div class="line">
          <div class="list-left">
            <img src="http://gatewang.68v8.com/file/upload/201607/22/10-22-57-22-11.jpg" alt="">
          </div>
          <div class="list-right">
            <div class="left-wrapper">
              <h2 class="title">成都市永恒科技有限公司成都市永恒科技有限公司</h2>
              <div class="desc">成都市锦江区提督街58号绵阳大厦9楼i座</div>
            </div>
            <div class="right-wrapper">
              <div class="see-num"><i class="icon-see"></i>1621</div>
              <div class="price-zhe"><500m</div>
            </div>
            <div class="phone-num">028-1568592 <span>9.3折</span></div>
          </div>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default{
    created() {
      this.temp = true;
    },
    directives: {
      scroll: {
        bind(el, binding) {
          window.addEventListener('scroll', () => {
            if (document.body.scrollTop + window.innerHeight >= document.body.clientHeight) { // document.body.clientHeight el.clientHeight
              let fnc = binding.value;
              fnc();
            }
          });
        }
      }
    },
    destroyed() {
      window.removeEventListener('scroll', this.More);
      this.temp = false;
    },
    methods: {
      More() {
        if (this.temp) {
          this.temp = false;
          console.log(2);
        }
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl"
  .list
    position relative
    overflow hidden
    height auto
    padding 0 10px 40px 10px
    li
      position relative
      overflow hidden
      border-bottom-1px()
      padding 10px  0
      .line
        display flex
        flex-wrap wrap
        .list-left
          width 110px
          height 80px
          flex 0 0 110px
          position relative
          img
            width 110px
            height 80px
            border-radius 3px
        .list-right
          font-size 0
          flex 1
          display flex
          position relative
          overflow: hidden
          flex-wrap: wrap;
          width: 100%;
          .left-wrapper
            width 72%
            padding-left 8px
            box-sizing border-box
            font-size 12px
            text-align left
            flex 1
            .title
              width 100%
              height 15px
              position relative
              font-size 15px
              color #333
              font-weight 600
              text-overflow: ellipsis
              white-space: nowrap
              overflow: hidden
            .desc
              margin 8px 0
              font-size 12px
              color #808080
              line-height 1.4
          .phone-num
            width 100%
            font-size 14px
            text-align left
            margin-left 8px
            height 19px
            position relative
            line-height 19px
            font-color()
            span
              display inline-block
              position absolute
              top 0
              right 0
              font-size 16px
              line-height 15px
              text-align right
          .right-wrapper
            width 28%
            flex 0 0 28%
            position relative
            overflow hidden
            box-sizing border-box
            text-align right
            color #808080
            .see-num
              font-size 12px
              .icon-see
                width 11px
                height 8px
                margin-right 4px
                display inline-block
            .price-zhe
              font-size 14px
              margin-top 12px
      .list-bottom
        position relative
        width 100%
        display block
        box-sizing border-box
        padding 0 20px
        text-align right
        color #bebebe
</style>
