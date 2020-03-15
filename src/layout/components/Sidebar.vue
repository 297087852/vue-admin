<template>
  <aside>
    <div class="logo-container">
      <router-link to="/" class="logo-lick">
        <img class="logo" src="@/assets/egg.png" alt="">
        <span v-if="!isCollaseSidebar">VUE ADMIN</span>
      </router-link>
    </div>
    <el-scrollbar>
      <el-menu
        router
        class="sidebar-menu"
        background-color="#001529"
        text-color="rgba(255, 255, 255, 0.65)"
        :collapse="isCollaseSidebar"
        :collapse-transition="false"
      >
        <sidebar-item :router="router" v-for="(router, index) in routes" :key="index"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script>
import SidebarItem from './SidebarItem'
import { routes } from '@/router'

export default {
  name: 'Sidebar',

  props: {
  },

  components: { SidebarItem },

  data () {
    return {
      routes
    }
  },

  computed: {
    isCollaseSidebar () {
      return this.$store.state.app.isCollaseSidebar
    }
  }
}
</script>

<style scoped lang="scss">

</style>
