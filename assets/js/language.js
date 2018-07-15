var select = new Vue({
  el: '#select--language',
  data: {
    showList: false
  },
  methods: {
    selectLang () {
      this.showList = !this.showList;
    }
  }
});