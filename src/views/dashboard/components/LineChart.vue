<template>
  <div :style="{width: width, height: height}"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Reseze from '../mixins/resize'
require('echarts/lib/chart/line')
require('echarts/lib/component/legend')
require('echarts/lib/component/tooltip')
require('echarts/theme/macarons') // echarts theme

export default {
  name: 'LineChart',

  mixins: [Reseze],

  props: {
    width: {
      default: '100%'
    },
    height: {
      default: '350px'
    }
  },

  components: { },

  data () {
    return {
      chart: null
    }
  },

  computed: {
  },

  created () {
  },

  mounted () {
    this.initChart()
  },

  watch: {
  },

  methods: {
    initChart () {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOption()
    },

    setOption () {
      const option = {
        legend: {
          data: ['邮件营销', '联盟广告'],
          show: true,
          padding: [10, 10]
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 40,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          axisTick: { show: false },
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          axisTick: { show: false },
          splitArea: {
            areaStyle: {
              // color: ['#aaa', '#fff']
            }
          }
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            smooth: true,
            data: [220, 132, 191, 144, 90, 180, 160]
          },
          {
            name: '联盟广告',
            type: 'line',
            smooth: true,
            areaStyle: {
              color: '#f3f8ff'
            },
            data: [120, 182, 131, 134, 200, 230, 210]
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
