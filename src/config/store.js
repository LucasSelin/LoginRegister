import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
      auth_request(state){
        state.status = 'loading'
      },
      auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
      },
      auth_error(state){
        state.status = 'error'
      },
      logout(state){
        state.status = ''
        state.token = ''
      },
  },
  actions: {
    login({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios.post('http://pentagro.ddns.com.br:65129/api/user/login', JSON.stringify(user), {headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }})
          .then(resp => {
            let tok = resp.data.replace(/"/g,'')
            const token = tok
            const user = "resp.data.user"
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
            this.$swal("aolllllllll");
          })
        })
    },
    register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios.post('http://pentagro.ddns.com.br:65129/api/user/saveuser', user, {headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }}).then(resp => {
          console.log(resp);
          const token = resp.data.token
          const user = 'resp.data.user'
          localStorage.setItem('token', "")
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          console.log(err);
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
  },
  getters : {
    isLoggedIn: state => !!state.token,
  }
})