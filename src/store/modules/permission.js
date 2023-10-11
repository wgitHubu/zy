import { constantRoutes } from '@/router'
export default {
  namespaced: true,
  state: {
    routes: []
  },
  mutations: {
    setRoutes(state, payload) {
      console.log(333)
      state.routes = [...constantRoutes, ...payload]
    }
  }
}
