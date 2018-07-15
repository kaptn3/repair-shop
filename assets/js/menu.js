var menu = new Vue({
  el: '#menu',
  data: {
    show: false
  },
  methods: {
    menu () {
      this.show = !this.show;
    }
  }
});