<template>
  <div :style="{width, height}"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import resize from '../mixins/resize'
require('echarts/lib/chart/line')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
require('echarts/theme/macarons') // echarts theme

export default {
  name: 'RadarChart',

  mixins: [resize],

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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['p1', 'p2', 'p3'],
          bottom: 10
        },
        radar: {
          // shape: 'circle',
          radius: '90',
          center: ['50%', '130'],
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '销售', max: 6500 },
            { name: '管理', max: 30000 },
            { name: '信息技术', max: 30000 },
            { name: '客服', max: 30000 },
            { name: '研发', max: 30000 },
            { name: '市场', max: 30000 }
          ]
        },
        series: [{
          type: 'radar',
          areaStyle: {
            opacity: 1
          },
          data: [
            {
              value: [4300, 10000, 16000, 18000, 22000, 26000],
              name: 'p1'
            },
            {
              value: [4000, 14000, 28000, 18000, 16000, 11000],
              name: 'p2'
            },
            {
              value: [5000, 11000, 16000, 26000, 19000, 16000],
              name: 'p3'
            }
          ]
        }]
      }

      this.chart.setOption(option)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
