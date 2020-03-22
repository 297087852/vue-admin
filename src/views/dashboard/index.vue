<template>
  <div>
    <el-row class="block-panel" :gutter="30">
      <el-col
        :xs="12"
        :sm="12"
        :lg="6"
        v-for="card in panelList"
        :key="card.type"
      >
        <div class="card-panel block-item clearfix">
          <div :class="['card-icon-warp', 'card-icon-'+ card.prop]">
            <svg-icon class="card-icon" :iconClass="card.icon"></svg-icon>
          </div>
          <div class="card-content">
            <div class="card-content-type">{{ card.type }}</div>
            <div class="card-content-amount">{{ card.amount }}</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row class="block-item">
      <LineChart />
    </el-row>

    <el-row :gutter="30">
      <el-col :xs="24" :sm="24" :lg="8">
        <radar-chart class="block-item" />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <pie-chart class="block-item" />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <bar-chart class="block-item" />
      </el-col>
    </el-row>

    <el-row :gutter="30">
      <el-col :xs="24" :sm="24" :lg="12">
        <order-table class="block-item" />
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <todo-list class="block-item" />
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <box-card class="block-item" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  LineChart,
  PieChart,
  RadarChart,
  BarChart,
  OrderTable,
  BoxCard,
  TodoList
} from './components'

export default {
  name: 'Dashboard',

  props: {},

  components: {
    LineChart,
    RadarChart,
    PieChart,
    BarChart,
    OrderTable,
    BoxCard,
    TodoList
  },

  data () {
    const panelList = [
      {
        type: '食品',
        prop: 'food',
        icon: 'panel_food',
        amount: 100086
      },
      {
        type: '服饰',
        prop: 'apparel',
        icon: 'panel_apparel',
        amount: 100086
      },
      {
        type: '生活用品',
        prop: 'daily',
        icon: 'panel_daily',
        amount: 100086
      },
      {
        type: '海鲜',
        prop: 'seafood',
        icon: 'panel_seafood',
        amount: 100086
      }
    ]

    return {
      panelList
    }
  },

  computed: {},

  created () {},

  mounted () {},

  watch: {},

  methods: {}
}
</script>

<style lang="scss">
$--panel-color: (
  food: #40c9c6,
  apparel: #36a3f7,
  daily: #f4516c,
  seafood: #34bfa3,
);

.block-item {
  margin-bottom: 30px;
  background-color: #fff;
}

.card-panel {
  height: 106px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    @each $type, $color in $--panel-color {
      .card-icon-#{$type} {
        color: #fff !important;
        background-color: $color;
      }
    }
  }
  .card-icon-warp {
    float: left;
    font-size: 48px;
    padding: 15px;
    margin: 15px 0 0 15px;
    border-radius: 10px;
    @each $type, $color in $--panel-color {
      &.card-icon-#{$type} {
        color: $color;
      }
    }
    .card-icon {
      float: left;
    }
  }
  .card-content {
    float: right;
    padding: 30px 20px;
      font-weight: 600;
    .card-content-type {
      margin-bottom: 10px;
      color: #999;
    }
    .card-content-amount {
      color: #666;
    }
  }
}
</style>
