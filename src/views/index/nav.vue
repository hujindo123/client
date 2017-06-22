<template>
  <ul class="index_slider-wrap Fix">
    <li class="Fix">
      <template  v-for="(value, key, index) in navData">
        <router-link :to="{path: '/search',query:{catid:value.catid, areaid: 3}}"  class="item" style="width: 25%;" >
          <img class="icon" :src="value.img">
          <div>{{value.navName}}</div>
        </router-link>
      </template>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this.navData = [
        {navName: '美食餐饮', catid: 21, img: 'static/image/nav/btn-cate.png'},
        {navName: '丽人', catid: 13, img: 'static/image/nav/btn-grils.png'},
        {navName: '休闲娱乐', catid: 52, img: 'static/image/nav/btn-play.png'},
        {navName: '生活服务', catid: 75, img: 'static/image/nav/btn-service.png'},
        {navName: '酒店住宿', catid: 90, img: 'static/image/nav/btn-hotel.png'},
        {navName: '旅游', catid: 66, img: 'static/image/nav/btn-travel.png'},
        {navName: '百货购物', catid: 114, img: 'static/image/nav/btn-shopping.png'},
        {navName: '文化', catid: 167, img: 'static/image/nav/btn-culture.png'}
       /* {navName: '小吃快餐', catid: 35}, {navName: '亲子游玩', catid: 57}, {navName: '运动健身', catid: 60}, {navName: '景点郊游', catid: 63},
        {navName: '美食餐饮', catid: 21}, {navName: '美食餐饮', catid: 21}, {navName: '美食餐饮', catid: 21}, {navName: '美食餐饮', catid: 21},
        {navName: '婚纱摄影', catid: 76}, {navName: '汽车服务', catid: 81}, {navName: '家装建材', catid: 161}, {navName: '自助餐', catid: 22},
        {navName: '美容', catid: 14}, {navName: '瘦身纤体', catid: 15}, {navName: '美发', catid: 16}, {navName: '美甲', catid: 17},
        {navName: '游泳/水上乐园', catid: 59}, {navName: '鲜花婚庆', catid: 87}, {navName: '全部分类', catid: ''} */
      ];
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .Fix
    padding: 0 8px 7px 8px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    position relative
    overflow hidden
    a
      width: 25%;
      font-size 12px
      padding: 13px 0 0;
      display: block;
      float: left;
      position: relative;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      color #333
      .icon
        width: 44px;
        height: 44px;
        margin: 0 auto 3px auto;
        position: relative;
</style>
