<template>
  <div>
    <template v-for="menu in menuData" >
      <el-submenu v-if="menu.children&&menu.meta" :key="menu.path" :index="menu.path" >
        <template slot="title">
          <i :class="menu.meta.icon"/>
          <span slot="title">{{ menu.name }}</span>
        </template>
        <menu-tree :menu-data="menu.children" />

      </el-submenu>

      <el-menu-item v-else-if="menu.meta" :key="menu.path" :index="menu.path" @click="goPage(menu.path,menu.name)">
        <i :class="menu.meta.icon"/>
        <span slot="title">{{ menu.name }}</span>
      </el-menu-item>
      <menu-tree v-else-if="menu.children" :menu-data="menu.children" />

    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MenuTree',
  props: {
    menuData: {
      type: []
    }
  },
  data() {
    return {
      pr: []
    }
  },
  methods: {
    goPage(path, name) {
      this.$router.push({ path: path })
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'permission_routes'])
  },
  mounted() {
  }
}
</script>

<style lang="css" scoped>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
  min-width: 0px !important;
  width: 60px;
}
.el-menu--collapse .el-menu .el-submenu span{
  display: none;
}
>>>.el-icon-arrow-right{
  display: none!important;
}
</style>
