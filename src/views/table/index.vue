<template>
  <div>
    <table-componet :configs="configs" :data="data"></table-componet>
  </div>
</template>

<script>
import TableComponet from '@/components/Table'
import configs from './components/tableConfig'

export default {
  name: 'Table',

  components: { TableComponet },

  data () {
    return {
      configs: configs(this),

      data: [
        {
          one: 1,
          two: 2,
          three: 3
        },
        {
          one: 1,
          two: 2,
          three: 3
        },
        {
          one: 1,
          two: 2,
          three: 3
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
