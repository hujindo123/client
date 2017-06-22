<template>
  <div class="details-main" @click="window()">
    <div class="details-content">
      <div class="details-top">
        <div class="details-top-left" @click="backPage()"><i class="icon-back"></i><span class="back">返回</span></div>
        <div class="details-top-middle">商户详情</div>
        <div class="details-top-right"><i class="icon-share"></i><i class="icon-search"></i></div>
      </div>
      <v-swiper></v-swiper>
      <div class="details-wrapper">
        <div class="details-desc">
          <h1 class="title">成都市爱情海假日酒店</h1>
          <div class="all-desc">环境:5.0 服务:5.0</div>
          <div class="details-star">
            <v-star></v-star>
          </div>
          <div class="details-address">
            <span class="address-city">成都市</span>
            <span class="address-type"><router-link to="search" style="color: #1a1a1a">酒店住宿</router-link><router-link
              to="search" style="margin-left: 12px;color: #1a1a1a;font-weight: 600">豪华酒店</router-link></span>
          </div>
        </div>
      </div>
      <div class="details-list">
        <div class="emty"></div>
        <div class="details-list-title">商家介绍
          <div class="zun-vip">尊享9.8折</div>
        </div>
        <div class="list-item vip-desc">
          我们主营手机数码产品及配件。我们主营业的牌子有华
          为，htc,小米，三星，苹果，联想，华硕，冬至，戴尔，
          索尼，惠普，弘基等品牌。
        </div>
        <div class="list-item ">
          <i class="icon-address"></i>
          <span>成都市锦江区提督街58号绵阳大厦9楼i座</span>
          <i class="icon-more"></i>
        </div>
        <div class="list-item ">
          <i class="icon-phone"></i>
          <a href="tel:028-8576589">028-8576589</a>
          <i class="icon-more"></i>
        </div>
        <div class="emty"></div>
        <div class="list-item product">
          关于盖网积分购买储值卡的问题，因商家自身原因不能兑现储值卡消费的，与我司无关！
        </div>
        <div class="emty"></div>
      </div>
      <div class="maybe-like">
        <span class="san"></span>
        <div class="maybe-like-title">你可能会喜欢</div>
        <div class="maybe-like-tuijian">推广</div>
      </div>
      <div class="list-item">
        <ul class="content">
          <li class="item">
            <router-link :to="{path: '/details',query:{ areaid: 4}}">
              <div class="border">
                <img src="http://gatewang.68v8.com/file/upload/201607/22/10-25-14-37-11.jpg" width="100%" height=""
                     alt="">
                <div class="desc">
                  <h1>成都市峨眉半山区山区</h1>
                  <div class="desc-star">
                    <v-star></v-star>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li class="item">
            <router-link :to="{path: '/details',query:{ areaid: 3}}">
              <div class="border">
                <img src="http://gatewang.68v8.com/file/upload/201607/22/10-25-14-37-11.jpg" width="100%" height=""
                     alt="">
                <div class="desc">
                  <h1>成都市峨眉半山区山区</h1>
                  <div class="desc-star">
                    <v-star></v-star>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li class="item">
            <router-link :to="{path: '/details',query:{ areaid: 3}}">
              <div class="border">
                <img src="http://gatewang.68v8.com/file/upload/201607/22/10-25-14-37-11.jpg" width="100%" height=""
                     alt="">
                <div class="desc">
                  <h1>成都市峨眉半山区山区</h1>
                  <div class="desc-star">
                    <v-star></v-star>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li class="item">
            <router-link :to="{path: '/details',query:{ areaid: 3}}">
              <div class="border">
                <img src="http://gatewang.68v8.com/file/upload/201607/22/10-25-14-37-11.jpg" width="100%" height=""
                     alt="">
                <div class="desc">
                  <h1>成都市峨眉半山区山区</h1>
                  <div class="desc-star">
                    <v-star></v-star>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li class="item">
            <router-link :to="{path: '/details',query:{ areaid: 3}}">
              <div class="border">
                <img src="http://gatewang.68v8.com/file/upload/201607/22/10-25-14-37-11.jpg" width="100%" height=""
                     alt="">
                <div class="desc">
                  <h1>成都市峨眉半山区山区</h1>
                  <div class="desc-star">
                    <v-star></v-star>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
          <li class="item">
            <router-link :to="{path: '/details',query:{ areaid: 3}}">
              <div class="border">
                <img src="http://gatewang.68v8.com/file/upload/201607/22/10-25-14-37-11.jpg" width="100%" height=""
                     alt="">
                <div class="desc">
                  <h1>成都市峨眉半山区山区</h1>
                  <div class="desc-star">
                    <v-star></v-star>
                  </div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="details-footer">
      <router-link to="/">首页</router-link>
      <i>></i>
      成都市爱琴海度假
    </div>
  </div>


</template>

<script type="text/ecmascript-6">
  import swiper from 'components/swiper/swiper';
  import star from 'components/star/star';
  export default {
    methods: {
      backPage() {
        this.$router.go(-1);
      },
      window() {
        window.scroll(0, 0);
      }
    },
    components: {
      'v-swiper': swiper,
      'v-star': star
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl";
  @import "../../common/css/mixin.styl";
  .details-main
    padding-bottom: 65px;
    background: #f1f1f1
    .details-content
      background: #fff
      .details-top
        width 100%
        height 47px;
        line-height 47px
        position relative
        overflow hidden
        display flex
        .details-top-left
          width 58px
          left 0
          top 0
          height 47px
          position absolute
          font-size 0
          box-sizing border-box
          z-index 3
          i
            color #5a5a5a
            font-weight bold
            font-size 24px
            vertical-align top
            line-height 47px
            display inline-block
          span
            color #333
            font-size 16px
            display inline-block
            line-height 47px
        .details-top-middle
          width 100%
          left 0
          top 0
          height 47px
          font-size 16px
          position absolute
          text-align center
          color #0e0e0e
          z-index 0
          font-weight 600
        .details-top-right
          right 0
          top 0
          width 76px
          height 47px
          font-size 18px
          text-align left
          position absolute
          line-height 47px
          z-index 3
          color #5a5a5a
          .icon-share
            margin-right 16px
      .details-wrapper
        width 100%
        height 77px
        box-sizing border-box
        padding 10px 15px
        display flex
        font-size 0
        .details-desc
          width 100%
          flex 1
          .title
            font-size 16px
            color #1a1a1a
            text-align left
          .all-desc
            width 50%
            padding 5px 0
            flex 1
            font-size 11px
            text-align left
            box-sizing border-box
            display inline-block
            border-top-bottom()
          .details-star
            height 28px
            width 50%
            flex 1
            box-sizing: border-box
            padding: 7px 0
            display inline-block
            .star-wrapper
              text-align right
          .details-address
            width 100%
            font-size 0
            text-align left
            .address-city
              color #9d9d9d
              font-size 12px
            .address-type
              color #9d9d9d
              font-size 11px
              margin-left 12px
              a
                color #000

      .details-list
        width 100%
        font-size 16px
        text-align left
        .emty
          width 100%
          height 10px
          background #f5f5f5
        .details-list-title
          width 100%
          height 30px
          position relative
          overflow hidden
          box-sizing border-box
          line-height 30px
          border-left 3px solid #ff6633
          padding-left 15px
          font-size 13px
          color #1a1a1a
          font-weight 600
          .zun-vip
            position absolute
            top 0
            right 15px
            color #ff6633
            font-weight 800
        .vip-desc
          font-size 12px
          line-height 1.5
        .list-item
          width 100%
          padding 15px
          display flex
          box-sizing border-box
          border-bottom-1px()
          i
            width 16px
            flex 0 0 16px
            color #bbbbbb
            &.icon-more
              position absolute
              display inline-block
              right 15px
          span, a
            width 100%
            box-sizing border-box
            padding 0 6px
            font-size 13px
            line-height 1.4
            color #1a1a1a
            display inline-block
            padding-right 18px
          &.product
            color #ff0000
            line-height 1.5
            text-indent 1em
            font-size 13px
      .maybe-like
        width 100%
        height 30px
        position relative
        line-height 30px
        background #fff
        font-size 14px
        text-align left
        color #777777
        border-bottom-top()
        .san
          width 10px
          height 10px
          left 0
          top 0
          position absolute
          z-index 100
          background #f5f5f5
          background-image url("../../../static/image/icon-triangle.png")
          background-position left top
          background-repeat no-repeat
          background-size contain
        .maybe-like-title
          margin-left 18px
          font-size 12px
          color #1a1a1a
        .maybe-like-tuijian
          position absolute
          right 15px
          top 0
          font-size 10px
      .list-item
        width 100%
        padding 0 10px
        box-sizing border-box
        position relative
        .content
          display flex
          position relative
          overflow hidden
          flex-wrap wrap
          justify-content space-between
          font-size 0
          .item
            width 50%
            padding 10px 5px
            box-sizing border-box
            .border
              position relative
              width 100%
              height 100%
              border()
              .desc
                width 100%
                padding 0 10px
                box-sizing border-box
                text-align left
                h1
                  margin-top 7px
                  font-size 13px
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
                .desc-star
                  height 13px
                  width 100%
                  margin 5px 0
    .details-footer
      padding: 12px 10px;
      margin-top: 15px;
      border-top-1px()
      text-align: left
      font-size 14px
      a
        color #000
        font-size 13px


</style>
