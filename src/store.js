import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    content:'',
    checkbox: false
  },
  mutations: {
    updateName (state, name) {
      state.name = name
    },
    updateEmail (state, email) {
      state.email = email
    },
    updateSelect (state, select) {
      state.select = select
    },
    updateCheckbox(state, checkbox) {
      state.checkbox = !checkbox
    },
  }
})
