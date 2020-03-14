<template>
  <div>
    <div class="collapse-menu" @click="toggleCollapse">
      <svg-icon iconClass="menu"></svg-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  methods: {
    toggleCollapse () {
      this.$store.dispatch('app/toggleCollapse')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
