<template>
  <div :style="{width: width, height: height}"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Reseze from '../mixins/resize'
require('echarts/lib/chart/line')

export default {
  name: 'LineChart',

  mixins: [Reseze],

  props: {
    width: {
      default: '100%'
    },
    height: {
      default: '300px'
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
      this.chart = echarts.init(this.$el)
      this.setOption()
    },

    setOption () {
      const option = {
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
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
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            smooth: true,
            areaStyle: {
              color: '#f3f8ff'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
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
