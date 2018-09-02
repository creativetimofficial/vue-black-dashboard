<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    disableRTL() {
      if(!this.$rtl.isRTL) {
        this.$rtl.disableRTL();
      }
    }
  },
  mounted() {
    this.$watch('$route', this.disableRTL, {immediate: true});
  }
};
</script>

<style lang="scss"></style>
