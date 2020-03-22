import Enum from '@/utils/enum'

const settings = Object.freeze({
  padding: { value: 0, name: '待付款' },
  success: { value: 1, name: '已付款' }
})

export default Enum(settings)
