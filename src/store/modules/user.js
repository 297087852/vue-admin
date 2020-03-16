import { login } from '@/api/login'

const state = {
}

const mutations = {
}

const actions = {
  login (store, options) {
    return new Promise((resolve, reject) => {
      login(options)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
