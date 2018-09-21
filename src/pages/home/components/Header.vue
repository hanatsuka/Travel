<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}<!-- 太长，用vuex API进行优化 -->
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'// , mapGetters
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // ...扩展运算符，把mapState对象(vuex里的数据)映射/混入到computed对象里，映射的是city公用数据，到city这个计算属性之中。this.city  这个this 很重要，这个映射直接映射到当前Vue的this对象上。同理，mapActions, mapMutations都是一样的道理
    // ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff
.header-left
  width: .64rem
  float: left
  .back-icon
   text-align: center
   font-size: .4rem
.header-input
  flex: 1
  margin-top: .12rem
  margin-left: .2rem
  height: .64rem
  line-height: .64rem
  background: #fff
  border-radius: .1rem
  color: #ccc
  padding-left: .2rem
.header-right
   min-width: 1.04rem
   padding: 0 .1rem
   float: right
   text-align: center
   color: #fff
  .arrow-icon
   font-size: .24rem
   margin-left: -.04rem
</style>
