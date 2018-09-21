<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li 
        class="search-item border-bottom" 
        v-for="item of list" 
        :key="item.id"
        @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
  import { mapMutations } from 'vuex'
  export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    computed: {
      hasNoData () {
        return !this.list.length
      }
    },
    methods: {
      handleCityClick (city) {
        // this.$store.dispatch('changeCity', city)可以不通过action直接调用mutation
          // this.$store.commit('changeCity', city)原来调用commit，现在通过映射，让changeCity方法获得mutation
          this.changeCity(city)
          this.$router.push('/')// router实例属性里有push方法，页面跳转
      },
      ...mapMutations(['changeCity'])// 有一个mutation叫changeCity,映射到组件里一个叫changeCity的方法里
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search)
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    .search-input
      height: .62rem
      line-height: .62rem
      text-align: center
      width: 100%
      border-radius: .06rem
      color: #666
      padding:0 .1rem
      box-sizing: border-box
  .search-content
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    overflow: hidden
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
