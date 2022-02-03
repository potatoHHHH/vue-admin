<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <the-aside ref="subMenu" />

    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <TheHeader/>
        <!--      <tags-view v-if="needTagsView" />-->
        <tags-view/>
      </div>

      <AppMain/>
    </div>
  <!--      <el-footer>footer</el-footer>-->

  <!--    </el-container>-->
    <!--  </el-container>-->
  </div>
</template>

<script>
import { navMsg } from '../assets/js/data/nav'
import TheAside from './components/SideBar'
import TheHeader from '../components/TheHeader'
import AppMain from './components/AppMain'
import tagsView from './components/TagsView'
import ResizeMixin from './mixin/ResizeHandler'
import { mapGetters, mapState } from 'vuex'
import FixiOSBug from './components/SideBar/FixiOSBug'
export default {
  name: 'Main',
  components: {
    TheAside,
    TheHeader,
    AppMain,
    tagsView
  },
  mixins: [ResizeMixin, FixiOSBug],
  data() {
    return {
      navMsg: navMsg
    }
  },
  computed: {
    ...mapGetters(['sidebar']),
    ...mapState({
      device: state => state.app.device,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        mobile: this.device === 'mobile'
      }
    }
  },
  created() {
    console.log(123)
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.app-wrapper {

  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}
.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.mobile .fixed-header {
  width: 100%;
}
</style>
