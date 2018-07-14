var app = new Vue({
  el: '#app',
  data: {
    show: false,
    currentNumber: 0,
    slides: []
  },
  methods: {
    menu () {
      this.show = !this.show;
    },
    nextSlide () {
      this.currentNumber += 1;
    },
    prevSlide () {
      this.currentNumber -= 1;
    }
  },
  computed: {
    currentSlide: function() {
      return slides[Math.abs(this.currentNumber) % slides.length];
    }
  }
});