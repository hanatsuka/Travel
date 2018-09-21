<template>
  <ul class="list">
    <li 
    class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleLetterClick" 
    >
    {{item}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
      letters () {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    methods: {
      handleLetterClick (e) {
        this.$emit('change', e.target.innerText)
        // 在触发DOM上的事件都会产生一个对象，即事件对象（也称event对象），这里用e接收事件对象。事件对象有很多属性和方法，此处的target属性是获取事件目标，即p元素DOM对象，然后获取其相应的属性
      },
      handleTouchStart () {
        this.touchStatus = true
      },
      handleTouchMove (e) {
        if (this.touchStatus) {
          // const startY = this.$refs['A'][0].offsetTop为了优化性能，在updated页面加载完钩子那边定义startY
          if (this.timer) {
            clearTimeout(this.timer)// this.timer为setTimeout返回的id值，标识要取消的延迟执行代码块
          }
          this.timer = setTimeout(() => {
          // 当move执行的时候，这个函数频率太高了，影响性能，因此需要函数节流
          // 方法是给move方法设置一个延迟16ms，如果在16ms内做了其他move操作，就重新执行当前的move操作
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      handleTouchEnd () {
        this.touchStatus = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.54rem
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
