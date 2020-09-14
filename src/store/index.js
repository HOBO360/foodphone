/***
 * @creater:wjiban
 * @create_time:20-9-8 21:43:3
 * @last_modify:wjiban
 * @modify_time:20-9-8 23:4:16
 * @line_count:28
 **/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoUser:[],
    user:"",
    pwd:"",
    userInfoData:[]
  },
  mutations: {
    isRegister(state,data){
      // state.user = data.name;
      // state.pwd = data.pwd;
      state.userInfoData.push(data.name)
      localStorage.setItem("username",data.name)
      localStorage.setItem("pwd",data.pwd)
      console.log(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
