<template>
  <div class="scroll">
    <ul class="scroll-left">
      <li class="scroll-li" v-for="(item, index) in leftList">{{item.title}}<span>{{item.num}}</span></li>
    </ul>
    <ul class="scroll-right">
      <li class="scroll-li" v-for="(item, index) in rightList.list">{{item.titles}} <span>12</span></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        leftList: [],
        rightList: []
      };
    },
    created() {
      this.leftList = [
        {
          title: '全部',
          num: 12,
          list: [
            {titles: '全部1', num: 12},
            {titles: '丽人1', num: 12},
            {titles: '美食餐饮1', num: 12},
            {titles: '休闲娱乐1', num: 12},
            {titles: '全部1', num: 12},
            {titles: '丽人1', num: 12},
            {titles: '美食餐饮1', num: 12},
            {titles: '休闲娱乐1', num: 12}
          ]
        },
        {
          title: '丽人',
          num: 12,
          list: [
            {titles: '全部2', num: 12},
            {titles: '丽人2', num: 12},
            {titles: '美食餐饮2', num: 12},
            {titles: '休闲娱乐2', num: 12},
            {titles: '全部2', num: 12},
            {titles: '丽人2', num: 12},
            {titles: '美食餐饮2', num: 12},
            {titles: '休闲娱乐2', num: 12}
          ]
        },
        {
          title: '美食餐饮',
          num: 12,
          list: [
            {titles: '全部3', num: 12},
            {titles: '丽人3', num: 12},
            {titles: '美食餐饮3', num: 12},
            {titles: '休闲娱乐3', num: 12},
            {titles: '全部3', num: 12},
            {titles: '丽人3', num: 12},
            {titles: '美食餐饮3', num: 12},
            {titles: '休闲娱乐3', num: 12}
          ]
        },
        {
          title: '休闲娱乐',
          num: 12,
          list: [
            {titles: '全部4', num: 12},
            {titles: '丽人4', num: 12},
            {titles: '美食餐饮4', num: 12},
            {titles: '休闲娱乐4', num: 12},
            {titles: '全部4', num: 12},
            {titles: '丽人4', num: 12},
            {titles: '美食餐饮4', num: 12},
            {titles: '休闲娱乐4', num: 12}
          ]
        },
        {
          title: '全部',
          num: 12,
          list: [
            {titles: '全部1', num: 12},
            {titles: '丽人1', num: 12},
            {titles: '美食餐饮1', num: 12},
            {titles: '休闲娱乐1', num: 12},
            {titles: '全部1', num: 12},
            {titles: '丽人1', num: 12},
            {titles: '美食餐饮1', num: 12},
            {titles: '休闲娱乐1', num: 12}
          ]
        },
        {
          title: '丽人',
          num: 12,
          list: [
            {titles: '全部2', num: 12},
            {titles: '丽人2', num: 12},
            {titles: '美食餐饮2', num: 12},
            {titles: '休闲娱乐2', num: 12},
            {titles: '全部2', num: 12},
            {titles: '丽人2', num: 12},
            {titles: '美食餐饮2', num: 12},
            {titles: '休闲娱乐2', num: 12}
          ]
        },
        {
          title: '美食餐饮',
          num: 12,
          list: [
            {titles: '全部3', num: 12},
            {titles: '丽人3', num: 12},
            {titles: '美食餐饮3', num: 12},
            {titles: '休闲娱乐3', num: 12},
            {titles: '全部3', num: 12},
            {titles: '丽人3', num: 12},
            {titles: '美食餐饮3', num: 12},
            {titles: '休闲娱乐3', num: 12}
          ]
        },
        {
          title: '休闲娱乐',
          num: 12,
          list: [
            {titles: '全部4', num: 12},
            {titles: '丽人4', num: 12},
            {titles: '美食餐饮4', num: 12},
            {titles: '休闲娱乐4', num: 12},
            {titles: '全部4', num: 12},
            {titles: '丽人4', num: 12},
            {titles: '美食餐饮4', num: 12},
            {titles: '休闲娱乐4', num: 12}
          ]
        },
        {
          title: '全部',
          num: 12,
          list: [
            {titles: '全部1', num: 12},
            {titles: '丽人1', num: 12},
            {titles: '美食餐饮1', num: 12},
            {titles: '休闲娱乐1', num: 12},
            {titles: '全部1', num: 12},
            {titles: '丽人1', num: 12},
            {titles: '美食餐饮1', num: 12},
            {titles: '休闲娱乐1', num: 12}
          ]
        },
        {
          title: '丽人',
          num: 12,
          list: [
            {titles: '全部2', num: 12},
            {titles: '丽人2', num: 12},
            {titles: '美食餐饮2', num: 12},
            {titles: '休闲娱乐2', num: 12},
            {titles: '全部2', num: 12},
            {titles: '丽人2', num: 12},
            {titles: '美食餐饮2', num: 12},
            {titles: '休闲娱乐2', num: 12}
          ]
        },
        {
          title: '美食餐饮',
          num: 12,
          list: [
            {titles: '全部3', num: 12},
            {titles: '丽人3', num: 12},
            {titles: '美食餐饮3', num: 12},
            {titles: '休闲娱乐3', num: 12},
            {titles: '全部3', num: 12},
            {titles: '丽人3', num: 12},
            {titles: '美食餐饮3', num: 12},
            {titles: '休闲娱乐3', num: 12}
          ]
        },
        {
          title: '休闲娱乐',
          num: 12,
          list: [
            {titles: '全部4', num: 12},
            {titles: '丽人4', num: 12},
            {titles: '美食餐饮4', num: 12},
            {titles: '休闲娱乐4', num: 12},
            {titles: '全部4', num: 12},
            {titles: '丽人4', num: 12},
            {titles: '美食餐饮4', num: 12},
            {titles: '休闲娱乐4', num: 12}
          ]
        }
      ];
      this.rightList = this.leftList[0];
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl";
  .scroll
    width 100%
    box-sizing border-box
    font-size 12px
    text-align left
    color #666
    position: relative;
    overflow scroll
    flex 1
    .scroll-left, .scroll-right
      width 50%
      line-height 50px
      display inline-block
      flex 0 0 50%
      position relative
      box-sizing border-box
      .scroll-li
        padding-left 30px
        span
          position absolute
          right 10px
          display inline-block
          text-align right
    .scroll-left
      position absolute
      left 0
      top 0
      .scroll-li
        &:nth-child(odd)
          background #fff
        &:nth-child(even)
          background #f8f8f8
    .scroll-right
      position absolute
      right 0
      top 0
      background #f3f3f3
      .scroll-li
        height 50px
        border-bottom-1px()
      span
        position absolute
        right 10px
        display inline-block
        text-align right
</style>
