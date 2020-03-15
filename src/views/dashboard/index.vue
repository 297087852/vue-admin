<template>
  <div>
    <el-row class="block-panel" :gutter="20">
      <el-col class="card-panel" :xs="12" :sm="12" :lg="6">
        <el-card shadow="never">
          从不显示
        </el-card>
      </el-col>
      <el-col class="card-panel" :xs="12" :sm="12" :lg="6">
        <el-card shadow="never">
          从不显示
        </el-card>
      </el-col>
      <el-col class="card-panel" :xs="12" :sm="12" :lg="6">
        <el-card shadow="never">
          从不显示
        </el-card>
      </el-col>
      <el-col class="card-panel" :xs="12" :sm="12" :lg="6">
        <el-card shadow="never">
          从不显示
        </el-card>
      </el-col>
    </el-row>

    <el-row class="block">
      <LineChart  />
    </el-row>
  </div>
</template>

<script>
import LineChart from './components/LineChart'

export default {
  name: 'Dashboard',

  props: {
  },

  components: { LineChart },

  data () {
    return {
    }
  },

  computed: {
  },

  created () {
  },

  mounted () {
  },

  watch: {
  },

  methods: {
  }
}
</script>

<style lang="scss">
.card-panel {
  margin-bottom: 30px;
}
.block {
  padding: 10px 20px;
  margin-bottom: 30px;
  background-color: #fff;
}
</style>
