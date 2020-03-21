import { throttle } from '@/utils'

export default {
  mounted () {
    this.initResize()
  },

  beforeDestroy () {
    this.destroyResize()
  },

  methods: {
    initResize () {
      window.addEventListener('resize', throttle(this.resize, 300))
    },

    destroyResize () {
      window.removeEventListener('resize', this.resize)
    },

    resize () {
      this.chart && this.chart.resize()
    }
  }
}
