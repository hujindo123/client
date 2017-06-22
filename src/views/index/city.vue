<template>
  <ul class="city">
    <li v-for="item in city" class="city-li">
      <router-link :to="{path:'search', query:{areaid:item.areaid}}">{{item.name}}</router-link>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this.city = [
        {name: '全部', areaid: 0}, {name: '锦江区', areaid: 5}, {name: '青羊区', areaid: 6}, {name: '金牛区', areaid: 7},
        {name: '武侯区', areaid: 8}, {name: '成华区', areaid: 9}, {name: '龙泉驿', areaid: 10}, {name: '青白江区', areaid: 11},
        {name: '新都区', areaid: 12}, {name: '温江区', areaid: 13}, {name: '金堂县', areaid: 14}, {name: '双流区', areaid: 15},
        {name: '郫县', areaid: 16}, {name: '大邑县', areaid: 17}, {name: '蒲江县', areaid: 18}, {name: '新津县', areaid: 19},
        {name: '都江堰市', areaid: 20}, {name: '彭州市', areaid: 21}, {name: '崇州市', areaid: 22}, {name: '邛崃市', areaid: 23},
        {name: '崇州市', areaid: 24}, {name: '高新区', areaid: 25}, {name: '天府新区', areaid: 26}, {name: '高新西区', areaid: 27}
      ];
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/mixin.styl";
  .city
    position relative
    padding 10px 15px
    background #f0f0f0
    overflow hidden
    width: 100%;
    box-sizing: border-box;
    .city-li
      position relative
      width 33%
      height 38px
      line-height 38px
      float left
      background #fff
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      box-sizing border-box
      border-bottom-left()
      &:nth-child(3),&:nth-child(6),&:nth-child(9),&:nth-child(12),&:nth-child(15),&:nth-child(18),&:nth-child(21),&:nth-child(24)
        border-bottom-1px()
      a
        width 100%
        line-height 38px
        display block
        color #323232
</style>
