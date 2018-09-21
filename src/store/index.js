import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {
  //   changeCity (ctx, city) {
  //     // 接受两个参数，ctx上下文，city为组件传递的参数
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
  // getters: {
  //   doubleCity (State) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
