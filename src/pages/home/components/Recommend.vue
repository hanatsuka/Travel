<template>
  <div>
    <div class="recommend-titile">热销推荐</div>
    <ul>
      <router-link
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        tag="li"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc iconfont">
            <span class="item-star">&#xe60b;&#xe60b;&#xe60b;&#xe60b;&#xe60b;</span>
          {{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-titile
    margin-top: .2rem
    background: #eee
    text-indent: .2rem
    line-height: .8rem
  .item
    overflow: hidden
    display: flex
    // height: 2.5rem
    .item-img
      width: 2.3rem
      height: 2.3rem
      padding: .2rem
    .item-info
      flex: 1
      padding: .2rem
      min-width: 0
      .item-title
        line-height: .64rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .6rem
        color: #ccc
        font-size: .25rem
        ellipsis()
        .item-star
          color: #ffb436
      .item-button
        background: #ff9300
        margin .3rem .3rem
        line-height: .54rem
        padding: 0 .2rem
        border-radius: .06rem
        position: absolute
        right: 0
</style>
