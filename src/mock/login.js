export default [
  {
    url: 'login',
    method: 'POST',
    response: function (options) {
      const { username = '' } = JSON.parse(options.body)
      if (username === 'admin') {
        return { success: true }
      } else {
        return {
          success: false,
          message: '账号或密码错误'
        }
      }
    }
  }
]
