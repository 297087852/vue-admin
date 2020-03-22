<template>
  <div :style="{width, height}"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Reseze from '../mixins/resize'
require('echarts/lib/chart/pie')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
require('echarts/theme/macarons') // echarts theme

export default {
  name: 'PieChart',

  mixins: [Reseze],

  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },

  data () {
    return {
      chart: null
    }
  },

  mounted () {
    this.initChart()
  },

  methods: {
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOption()
    },
    setOption () {
      const option = {
        legend: {
          left: 'center',
          bottom: '10',
          data: ['周一', '周二', '周三', '周四', '周五']
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            name: '周数据',
            type: 'pie',
            roseType: 'radius',
            radius: [20, 90],
            center: ['50%', '120'],
            data: [
              { value: 240, name: '周一' },
              { value: 160, name: '周二' },
              { value: 140, name: '周三' },
              { value: 70, name: '周四' },
              { value: 59, name: '周五' }
            ]
          }
        ]
      }

      this.chart.setOption(option)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
