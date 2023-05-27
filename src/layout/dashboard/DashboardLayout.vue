<template>
  <div class="wrapper">
    <side-bar title="Auto-News Service">
      <template slot="links">
        <sidebar-link to="/dashboard" :name="$t('dashboard.title')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/groups" :name="$t('groups.title')" icon="tim-icons icon-atom"/>
        <sidebar-link to="/settings" :name="$t('settings.title')" icon="tim-icons icon-settings"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
