const state = {
}

const mutations = {
}

const actions = {
  login (store, options) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (options.username === 'admin' && options.password === 'admin') {
          resolve()
        } else {
          const err = '密码错误'
          reject(err)
        }
      }, 500)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
