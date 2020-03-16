import Mock from 'mockjs'

const req = require.context('.', true, /\.js$/)
const mocks = req.keys()
  .filter(filePath => filePath !== './index.js')
  .map(filePath => req(filePath).default)
  .flat()

mocks.map(item => {
  Mock.mock(new RegExp(item.url), item.methods, item.response)
})
