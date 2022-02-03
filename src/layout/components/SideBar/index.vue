<template>
  <el-aside class="sidebar-container" width="auto">
    <div style="height: 60px;line-height: 20px">
      <Logo :collapse="isCollapse"/>
    </div>
    <!--    <el-scrollbar wrap-class="scrollbar-wrapper">-->
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      class="el-menu-vertical-demo "

    >

      <menu-tree :menu-data="permission_routes" class="el-menu"/>
    </el-menu>
    <!--    </el-scrollbar>-->
  </el-aside>

</template>

<script>
import MenuTree from './MenuTree'
import Logo from './Logo'
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  data() {
    return {
    }
  },
  computed: {
    // ...mapState(
    //   {
    //     sidebar: state => state.app.sidebar
    //   }
    // ),
    ...mapGetters(['sidebar', 'permission_routes']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    isCollapse() {
      // return true
      return !this.sidebar.opened
    }
  },
  components: {
    MenuTree,
    Logo
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
/*.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {*/
/*  min-width: 200px !important;*/
/*  background: red !important;*/
/*}*/
</style>
