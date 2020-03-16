import Mock from 'mockjs'
import login from './login'

const mocks = [
  ...login
]

mocks.map(item => {
  Mock.mock(new RegExp(item.url), item.methods, item.response)
})
