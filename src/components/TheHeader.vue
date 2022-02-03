<template>
  <el-header height="50px" >
    <div class="navbar" style="display: flex;align-items: center;justify-content: space-between">
      <div style="display: flex;align-items: center;font-size:25px;;align-content: center" >
        <i v-if="!!sidebar.opened" class="el-icon-s-fold" @click="$store.dispatch('app/toggleSideBar')"/>
        <i v-else class="el-icon-s-unfold" @click="$store.dispatch('app/toggleSideBar')"/>
        <Breadcrumb />
      </div>

      <div style="display: flex;align-items: center;">
        <el-avatar size="medium" icon="el-icon-user-solid"/>
        <span style="">name</span>
      </div>
    </div>
  </el-header>
</template>

<script>
import Breadcrumb from './BreadCrumb'
import { mapGetters } from 'vuex'
export default {

  components: {
    Breadcrumb
  },
  data() {
    return {
      breadList: []
    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
//@import "~@/styles/mixin.scss";
@import "@/styles/variables.scss";
.navbar{
  height: 50px;
  overflow: hidden;
  position: relative;
  i{
    cursor: pointer;
  }
}

.el-header{
  padding: 0 10px !important;
}
</style>
