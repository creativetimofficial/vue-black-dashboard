<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    if(!this.$rtl.isRTL) {
      this.$rtl.disableRTL();
    }
  }
};
</script>

<style lang="scss"></style>
