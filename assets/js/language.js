var select = new Vue({
  el: '#select__language',
  data: {
    showList: false
  },
  methods: {
    selectLang () {
      this.showList = !this.showList;
    }
  }
});