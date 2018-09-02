export default {
  install(Vue) {
    let app = new Vue({
      data() {
        return {
          isRTL: false
        }
      },
      methods: {
        getDocClasses() {
          return document.body.classList
        },
        enableRTL() {
          this.isRTL = true;
          this.getDocClasses().add('rtl');
          this.getDocClasses().add('menu-on-right');
        },
        disableRTL() {
          this.isRTL = false;
          this.getDocClasses().remove('rtl');
          this.getDocClasses().remove('menu-on-right');
        }
      }
    });

    Vue.prototype.$rtl = app;
  }
}
