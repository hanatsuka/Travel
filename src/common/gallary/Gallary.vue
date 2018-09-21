<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-image" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonGallary',
    props: {
      imgs: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observeParents: true,
          observer: true // 为了解决给banner加上v-show之后，打开swiper会重新计算宽度，导致显示不正常；通过2个observe来检测结构变化的时候会重新自我刷新swiper
        }
      }
    },
    methods: {
      handleGallaryClick () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      // overflow: hidden
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallary-image
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
