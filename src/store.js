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
        checkbox: false,
        register: false
      },
      mutations: {
        updateName(state, name) {
          state.name = name
        },
        updateKana(state, kana) {
          state.kana = kana
        },
        updateCompany(state, company) {
          state.company = company
        },
        updateEmail(state, email) {
          state.email = email
        },
        updateZipCode(state, zipCode) {
          state.zipCode = zipCode
        },
        updateAddress(state, address) {
          state.address = address
        },
        updateTel(state, tel) {
          state.tel = tel
        },
        updateSelect(state, select) {
          state.select = select
        },
        updateSubject(state, subject) {
          state.subject = subject
        },
        updateContent(state, content) {
          state.content = content
        },
        updateCheckbox(state, checkbox) {
          state.checkbox = checkbox
        },
        updateRegister(state, register) {
          state.register = register
        }
      }
    }
  }
})
