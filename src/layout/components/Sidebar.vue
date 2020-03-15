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
        class="sidebar-menu"
        background-color="#001529"
        text-color="rgba(255, 255, 255, 0.65)"
        :collapse="isCollaseSidebar"
        :collapse-transition="false"
      >
        <sidebar-item :router="router" v-for="(router, index) in routers" :key="index"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  name: 'Sidebar',

  props: {
  },

  components: { SidebarItem },

  data () {
    return {
      routers: [
        {
          path: '3',
          name: '选项3',
          icon: 'username',
          // dropdown: true,
          children: [
            {
              path: '3-1',
              name: '选项3-1',
              icon: 'username'
            }
          ]
        },
        {
          path: '1',
          name: '选项1',
          icon: 'username',
          children: [
            {
              path: '1-1',
              name: '选项1-1',
              icon: 'username'
            },
            {
              path: '1-2',
              name: '选项1-2',
              icon: 'username'
            }
          ]
        },
        {
          path: '2',
          name: '选项2',
          icon: 'username',
          children: [
            {
              path: '2-1',
              name: '选项2-1',
              icon: 'username',
              noDropdown: true
            },
            {
              path: '2-2',
              name: '选项2-2',
              icon: 'username'
            }
          ]
        },
        {
          path: '3',
          name: '选项3',
          icon: 'username',
          // dropdown: true,
          children: [
            {
              path: '3-1',
              name: '选项3-1',
              icon: 'username'
            }
          ]
        },
        {
          path: '3',
          name: '选项3',
          icon: 'username',
          // dropdown: true,
          children: [
            {
              path: '3-1',
              name: '选项3-1',
              icon: 'username'
            }
          ]
        },
        {
          path: '3',
          name: '选项3',
          icon: 'username',
          // dropdown: true,
          children: [
            {
              path: '3-1',
              name: '选项3-1',
              icon: 'username'
            }
          ]
        },
        {
          path: '3',
          name: '选项3',
          icon: 'username',
          // dropdown: true,
          children: [
            {
              path: '3-1',
              name: '选项3-1',
              icon: 'username'
            }
          ]
        },
        {
          path: '3',
          name: '选项3',
          icon: 'username',
          // dropdown: true,
          children: [
            {
              path: '3-1',
              name: '选项3-1',
              icon: 'username'
            }
          ]
        },

        {
          path: '3',
          name: '选项3',
          icon: 'username',
          // dropdown: true,
          children: [
            {
              path: '3-1',
              name: '选项3-1',
              icon: 'username'
            }
          ]
        },
        {
          path: '3',
          name: '选项3',
          icon: 'username',
          // dropdown: true,
          children: [
            {
              path: '3-1',
              name: '选项3-1',
              icon: 'username'
            }
          ]
        }
      ]
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
