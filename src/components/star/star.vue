<template>
  <div class="star-wrapper">
    <i class="star-i-active icon-star"></i>
    <i class="star-i-active icon-star"></i>
    <i class="icon-star"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/css/fonts.css";
  .star-wrapper
    position relative
    overflow hidden
    text-align left
    i
      font-size 12px
      margin-right 4px
      display inline-block
      &.star-i-active
        color #f63
</style>
