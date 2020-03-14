<template>
  <div class="app-container">
    <Sidebar class="sidebar-container" />

    <div class="main-container">
      <Navbar class="navbar-container" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar } from './components'

export default {
  name: 'Layout',

  components: { Sidebar, Navbar }
}
</script>

<style lang="scss">

</style>
