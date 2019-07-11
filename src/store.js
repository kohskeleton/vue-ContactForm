import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    contact: {
      namespaced: true,

      state: {
        name: '',
        kana: '',
        company: '',
        email: '',
        zipCode: '',
        address: '',
        tel: '',
        select: null,
        subject: '',
        content: '',
        checkbox: false
      },
      mutations: {
        updateName(state, name) {
          state.name = name
        },
        updateEmail(state, email) {
          state.email = email
        },
        updateSelect(state, select) {
          state.select = select
        },
        updateCheckbox(state, checkbox) {
          state.checkbox = !checkbox
        }
      },
      actions: {
        updateName({commit}, value) {
          commit('updateName', value)
        },
        updateEmail({commit}, value) {
          commit('updateEmail', value)
        },
        updateSelect({commit}, value) {
          commit('updateSelect', value)
        },
        updateCheckbox({commit}, value) {
          commit('updateCheckbox', value)
        }
      }
    }
  }
})
