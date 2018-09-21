<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper"><!--  v-if="list.length"的意义在于让真正的数据传进来再创建数组，而不是创建空数组，解决轮播图第一页显示末尾图BUG -->
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl"><!-- //冒号很重要 -->
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet//样式进行穿透
    background: #fff
  .wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 31.25%//margin-top|margin-bottom|padding-top|padding-bottom的百分比值参照的不是容器的高度，而是宽度 。
    .swiper-image
      width: 100%
</style>
