<template>
  <div :style="{width, height}"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import resize from '../mixins/resize'
require('echarts/lib/chart/bar')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
require('echarts/theme/macarons') // echarts theme

export default {
  name: 'BarChart',

  mixins: [resize],

  props: {
    width: {
      default: '100%'
    },
    height: {
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
        grid: {
          top: 20,
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: false
        },
        yAxis: {
          type: 'value',
          axisTick: false
        },
        series: [
          {
            type: 'bar',
            stack: '1',
            barWidth: '60%',
            data: [120, 200, 150, 80, 70, 110, 130]
          },
          {
            type: 'bar',
            stack: '1',
            barWidth: '60%',
            data: [120, 200, 150, 80, 70, 110, 130]
          },
          {
            type: 'bar',
            stack: '1',
            barWidth: '60%',
            data: [120, 200, 150, 80, 70, 110, 130]
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
