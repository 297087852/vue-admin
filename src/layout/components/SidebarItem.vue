<template>
  <div v-if="!router.hidden">
    <el-menu-item
      v-if="hasOneShowChildren(router) && !router.dropdown"
      :index="`${router.path}/${onlyOneChildren.path}`"
    >
      <svg-icon v-if="onlyOneChildren.icon" :iconClass="onlyOneChildren.icon"></svg-icon>
      <span class="sidebar-title" slot='title'>{{onlyOneChildren.name}}</span>
    </el-menu-item>

    <el-submenu v-else :index="router.path">
      <template slot='title'>
        <svg-icon v-if="router.icon" :iconClass="router.icon"></svg-icon>
        <span class="sidebar-title" slot='title'>{{router.name}}</span>
      </template>
      <sidebar-item
        v-for="(routerItem, index) in router.children"
        :key="index"
        :router="routerItem"
      >
      </sidebar-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',

  props: {
    router: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      onlyOneChildren: null
    }
  },

  methods: {
    hasOneShowChildren (router) {
      const childrens = router.children || []
      const showChild = childrens.filter(child => !child.hiddren)

      if (showChild.length === 0) {
        this.onlyOneChildren = { ...router }
        return true
      }

      if (showChild.length === 1) {
        this.onlyOneChildren = showChild[0]
        return true
      }

      return false
    }
  }
}
</script>

<style lang="scss">
.sidebar-title {
  margin-left: 10px;
}
</style>
