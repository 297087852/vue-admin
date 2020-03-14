<template>
  <nav>
    <div class="collapse-menu" @click="toggleCollapse">
      <svg-icon iconClass="menu"></svg-icon>
    </div>

    <div class="right-menu">
      <div class="right-menu-item search">
        <svg-icon iconClass="search" @click.native="handleShowSearch"></svg-icon>
        <el-select
          :class="['searchSelect', {'active': showSearch}]"
          v-model="searchQuery"
          placeholder="请输入关键词"
          filterable
          remote
          :remote-method="selectSearch"
        >
          <el-option
            v-for="item in searchOption"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <div class="right-menu-item">
        <el-dropdown trigger="click">
          <img class="avatar" src="@/assets/egg.png">
          <i class="el-icon-caret-bottom" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>github</el-dropdown-item>
            <el-dropdown-item>登出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',

  data () {
    return {
      searchQuery: '',
      searchOption: [],
      showSearch: false
    }
  },

  methods: {
    toggleCollapse () {
      this.$store.dispatch('app/toggleCollapse')
    },

    handleShowSearch () {
      this.showSearch = !this.showSearch
    },

    selectSearch () {
    }
  }
}
</script>

<style scoped lang="scss">

</style>
