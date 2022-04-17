import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:'',
    role:'',
    name:'',
    idcard:'',
    college:'',
    color:'无'
  },
  getters: {
    get_id:state=>{
      let id = state.id
      return id
    },
    get_role:state=>{
      let role = state.role
      return role
    },
    get_name:state=>{
      let name = state.name
      return name
    },
    get_idcard:state=>{
      let idcard = state.idcard
      return idcard
    },
    get_college:state=>{
      let college = state.college
      return college
    },
    get_color:state=>{
      let color = state.color
      return color
    }
  },
  mutations: {
    set_id (state, data) {
      state.id = data
    },
    set_role (state, data) {
      state.role = data
    },
    set_name (state, data) {
      state.name = data
    },
    set_idcard (state, data) {
      state.idcard = data
    },
    set_college (state, data) {
      state.college = data
    },
    set_color (state, data) {
      state.color = data
    },
  },
  actions: {
  },
  modules: {
  }
})
