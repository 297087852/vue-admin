import { throttle } from '@/utils'

export default {
  data () {
    return {
      sidebarDom: null
    }
  },

  mounted () {
    this.initResize()
  },

  beforeDestroy () {
    this.destroyResize()
  },

  methods: {
    initResize () {
      window.addEventListener('resize', throttle(this.resize, 300))

      this.sidebarDom = document.querySelector('.sidebar-container')
      this.sidebarDom.addEventListener('transitionend', this.widthResize)
    },

    destroyResize () {
      window.removeEventListener('resize', this.resize)
      this.sidebarDom.removeEventListener('transitionend', this.widthResize)
    },

    resize () {
      this.chart && this.chart.resize()
    },

    widthResize (e) {
      if (e.propertyName === 'width') {
        return throttle(this.resize, 300)()
      }
    }
  }
}
