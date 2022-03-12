import authApi from '@/api/auth';
import { setItem } from '@/helpers/persistanceStorage';
const state = {
  isSubmitting: false,
  isLoading: false,
  isLoggedIn: null,
  currentUser: null,
  validationErrors: null

}
export const mutationTypes = {
  registerStart: '[auth] register start',
  registerSuccess: '[auth] register success',
  registerFailure: '[auth] register failure',

  loginStart: '[auth] login start',
  loginSuccess: '[auth] login success',
  loginFailure: '[auth] login failure',

  getCurrentUserStart: '[auth] Get current user start',
  getCurrentUserSuccess: '[auth] Get current user success',
  getCurrentUserFailure: '[auth] Get current user failure',
}
export const actionTypes = {
  register: '[auth] register',
  login: '[auth] login',
  getCurrentUser: '[auth] Get current user'
}
export const getterTypes = {
  currentUser: '[auth] currentUser',
  isLoggedIn: '[auth] isLoggedIn',
  isAnonymous: '[auth] isAnonymous'
}

const getters = {
  [getterTypes.currentUser]: state => {
    return state.currentUser
  },
  [getterTypes.isLoggedIn]: state => {
    return Boolean(state.isLoggedIn)
  },
  [getterTypes.isAnonymous]: state => {
    return state.isLoggedIn === false
  }
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
  },


  [mutationTypes.loginStart](state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  [mutationTypes.loginSuccess](state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  [mutationTypes.loginFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },


  [mutationTypes.getCurrentUserStart](state) {
    state.isLoading = true
  },
  [mutationTypes.getCurrentUserSuccess](state, payload) {
    state.isLoading = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  [mutationTypes.getCurrentUserFailure](state) {
    state.isLoading = false
    state.isLoggedIn = false
    state.currentUser = null
  }
}

const actions = {
  [actionTypes.register](context, credentials) {
    return new Promise(resolve => {
      context.commit(mutationTypes.registerStart)
      authApi
        .register(credentials)
        .then(response => {
          context.commit(mutationTypes.registerSuccess, response.data.user)
          // window.localStorage.setItem('accessToken', response.data.user.token)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch(result => {
          context.commit(mutationTypes.registerFailure, result.response.data.errors)
        })
    })
  },
  [actionTypes.login](context, credentials) {
    return new Promise(resolve => {
      context.commit(mutationTypes.loginStart)
      authApi
        .login(credentials)
        .then(response => {
          context.commit(mutationTypes.loginSuccess, response.data.user)
          // window.localStorage.setItem('accessToken', response.data.user.token)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch(result => {
          context.commit(mutationTypes.loginFailure, result.response.data.errors)
        })
    })
  },
  [actionTypes.getCurrentUser](context) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getCurrentUserStart)
      authApi
        .getCurrentUser()
        .then(response => {
          context.commit(mutationTypes.getCurrentUserSuccess, response.data.user)
          // window.localStorage.setItem('accessToken', response.data.user.token)

          resolve(response.data.user)
        })
        .catch(() => {
          context.commit(mutationTypes.getCurrentUserFailure)
        })
    })
  },

}

export default {
  state,
  actions,
  mutations,
  getters
}
