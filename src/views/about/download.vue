<template>
  <div>
    <div>
      <div>下载APP1</div>
      <div>下载APP2</div>
      <div>下载APP3</div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this.$emit('a', true);
    }

  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
