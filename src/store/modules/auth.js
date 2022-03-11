import authApi from '@/api/auth';
import { setItem } from '@/helpers/persistanceStorage';
const state = {
  isSubmitting: false,
  isLoggedIn: null,
  currentUser: null,
  validationErrors: null

}
export const mutationTypes = {
  registerStart: '[auth] register start',
  registerSuccess: '[auth] register success',
  registerFailure: '[auth] register failure'
}
export const actionTypes = {
  register: '[auth] register'
}

const mutations = {
  [mutationTypes.registerStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.registerSuccess](state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true

  },
  [mutationTypes.registerFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  }
}

const actions = {
  register(context, credentials) {
    return new Promise(resolve => {
      context.commit('registerStart')
      authApi
        .register(credentials)
        .then(response => {
          context.commit('registerSuccess', response.data.user)
          // window.localStorage.setItem('accessToken', response.data.user.token)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch(result => {
          context.commit('registerFailure', result.response.data.errors)
        })
    })
  }
}

export default {
  state,
  actions,
  mutations
  // getters
}
