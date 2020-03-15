<template>
  <div :class="['app-container', {isCollaseSidebar: isCollaseSidebar}]">
    <Sidebar class="sidebar-container" />

    <div class="main-container">
      <Navbar class="navbar-container" />
      <section class="content-container">
        <router-view :key="key"></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar } from './components'

export default {
  name: 'Layout',

  components: { Sidebar, Navbar },

  computed: {
    key () {
      return this.$route.path
    },
    isCollaseSidebar () {
      return this.$store.state.app.isCollaseSidebar
    }
  }
}
</script>

<style lang="scss">

</style>
