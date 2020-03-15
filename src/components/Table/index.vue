<script>
export default {
  props: {
    tableProps: {
      type: Object,
      default: () => ({})
    },

    configs: {
      type: Array,
      default: () => []
    },

    data: {
      type: Array,
      default: () => []
    },

    showCheckbox: {
      type: Boolean,
      default: true
    }
  },

  render () {
    const spread = {
      props: {
        data: this.data,
        border: true,
        stripe: true,
        rowKey: row => row.ROW_NUM,
        ...this.$props.tableProps
      },
      on: {
        'sort-change': sort => this.$emit('sortChange', sort),
        'selection-change': val => this.$emit('selectionChange', val)
      }
    }
    return (
      <el-table { ...spread } style="width: 100%" highlight-current-row>
        {
          this.$props.showCheckbox &&
          <el-table-column
            align="center"
            type="selection"
            width="55"
          />
        }

        { this.configs.map(this.renderItem) }
      </el-table>
    )
  },

  methods: {
    renderItem (config, index) {
      const headerRender = Object.hasOwnProperty.call(config, 'headerRender') && { header: config.headerRender }
      const render = Object.hasOwnProperty.call(config, 'render') && { default: config.render }

      return (
        !config.hiddren &&
        <el-table-column
          {...{ props: config }}
          key={ index }
          sortable={ !!config.sortable }
          scopedSlots={ Object.assign({}, headerRender, render) }
        />
      )
    }
  }
}
</script>

<style>

</style>
