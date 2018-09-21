<template>
  <transition>
    <slot></slot><!-- 见detail/banner.vue，common-gallary标签外包裹fade-animation，这里slot相当于common-gallary -->
  </transition>
</template>

<script>
  export default {
    name: 'Fade'
  }
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: all .5s
</style>
