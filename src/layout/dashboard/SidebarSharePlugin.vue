<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{show: isOpen}">
      <a data-toggle="dropdown" class="settings-icon">
        <i class="fa fa-cog fa-2x" @click="toggleDropDown"> </i>
      </a>
      <ul class="dropdown-menu" :class="{show: isOpen}">
        <li class="header-title"> Sidebar Background</li>
        <li class="adjustments-line">

          <a class="switch-trigger background-color">
            <div class="badge-colors text-center">
              <span v-for="item in sidebarColors" :key="item.color" class="badge filter"
                    :class="[`badge-${item.color}`,{active:item.active}]"
                    :data-color="item.color"
                    @click="changeSidebarBackground(item)"></span>
            </div>
            <div class="clearfix"></div>
          </a>
        </li>

        <li class="adjustments-line text-center color-change">
          <span class="color-label">LIGHT MODE </span>
          <span class="badge light-badge mr-2" @click="toggleMode('white')"></span>
          <span class="badge dark-badge ml-2" @click="toggleMode('dark')"></span>
          <span class="color-label"> DARK MODE</span>
        </li>

        <li class="button-container">
          <a href="https://www.creative-tim.com/product/vue-black-dashboard" target="_blank" class="btn btn-primary btn-block btn-round">Download Now</a>
          <a href="https://demos.creative-tim.com/vue-black-dashboard/documentation" target="_blank" class="btn btn-default btn-block btn-round">
            Documentation
          </a>
        </li>
        <li class="header-title">Want more components?</li>
        <li class="button-container">
          <a href="https://www.creative-tim.com/product/vue-black-dashboard-pro" class="btn-round btn btn-danger btn-block">
            Get pro version
          </a>
        </li>


        <li class="header-title">Thank you for sharing!</li>

        <li class="button-container text-center">
          <social-sharing url="https://www.creative-tim.com/product/vue-black-dashboard" inline-template
                          title="Vue Black Dashboard - Free Bootstrap Admin Template for Vue.js"
                          hashtags="vuejs, dashboard, bootstrap" twitter-user="creativetim">
            <div>
              <network network="twitter" class="btn btn-round btn-info sharrre">
                <i class="fab fa-twitter"></i>
              </network>
              <network network="facebook" class="btn btn-round btn-info sharrre">
                <i class="fab fa-facebook"></i>
              </network>
            </div>
          </social-sharing>
        </li>

        <li class="button-container d-flex justify-content-center">
          <gh-btns-star slug="creativetimofficial/vue-black-dashboard" show-count></gh-btns-star>
          <gh-btns-fork slug="creativetimofficial/vue-black-dashboard" show-count></gh-btns-fork>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
    },
    data() {
      return {
        isOpen: false,
        sidebarColors: [
          { color: 'primary', active: false, value: 'primary' },
          { color: 'vue', active: true, value: 'vue' },
          { color: 'info', active: false, value: 'blue' },
          { color: 'success', active: false, value: 'green' }
        ]
      }
    },
    methods: {
      toggleDropDown() {
        this.isOpen = !this.isOpen
      },
      closeDropDown() {
        this.isOpen = false
      },
      toggleList(list, itemToActivate) {
        list.forEach((listItem) => {
          listItem.active = false
        });
        itemToActivate.active = true
      },
      changeSidebarBackground(item) {
        this.$emit('update:backgroundColor', item.value)
        this.toggleList(this.sidebarColors, item)
      },
      toggleMode(type) {
        let docClasses = document.body.classList;
        if(type === 'white') {
          docClasses.add('white-content')
        } else {
          docClasses.remove('white-content')
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @import "~@/assets/sass/black-dashboard/custom/variables";
  .settings-icon {
    cursor: pointer;
  }
  .badge-vue {
    background-color: $vue;
  }
</style>
