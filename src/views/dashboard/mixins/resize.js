export default {
  mounted () {
    this.initResize()
  },

  beforeDestroy () {
    this.destroyResize()
  },

  methods: {
    initResize () {
      window.addEventListener('resize', this.resize)
    },

    destroyResize () {
      window.removeEventListener('resize', this.resize)
    },

    resize () {
      this.chart && this.chart.resize()
    }
  }
}
