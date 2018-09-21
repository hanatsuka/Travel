<template>
  <div>
    <div class="recommend-titile">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc iconfont">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-titile
    // margin-top: .2rem
    background: #eee
    text-indent: .2rem
    line-height: .8rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 37.09%
  .item-img
    width: 100%
  .item-info
    padding: .2rem
    min-width: 0
    .item-title
      line-height: .64rem
      font-size: .28rem
      color: #212121
      ellipsis()
    .item-desc
      line-height: .6rem
      color: #616161
      font-size: .24rem
      ellipsis()
</style>
