<template>
  <div>
    <table-component
      :configs="configs"
      :data="data"
      :tableProps="{border: false}"
      :showCheckbox="false"
    ></table-component>
  </div>
</template>

<script>
import TableComponent from '@/components/Table'
import orderStatus from '@/enums/orderStatus'

export default {
  name: 'OrderTable',

  props: {},

  components: { TableComponent },

  data () {
    return {
      configs: [
        {
          prop: 'order',
          label: '订单号'
        },
        {
          prop: 'price',
          label: '付款金额'
        },
        {
          prop: 'staus',
          label: '状态',
          render: scope => {
            const type = orderStatus.$is(scope.row.staus, 'padding') ? 'danger' : 'success'
            return <el-tag type={type}>{orderStatus.$parse(scope.row.staus)}</el-tag>
          }
        }
      ],
      data: [
        {
          order: 1,
          price: 110,
          staus: 1
        },
        {
          order: 2,
          price: 110,
          staus: 1
        },
        {
          order: 3,
          price: 110,
          staus: 1
        },
        {
          order: 4,
          price: 110,
          staus: 0
        },
        {
          order: 5,
          price: 110,
          staus: 1
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>
