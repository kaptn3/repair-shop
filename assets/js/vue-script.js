var app = new Vue({
  el: '#app',
  data: {
    currentNumber: 0,
    timer: null
  },
  mounted: function () {
    this.startRotation();
  },
  methods: {
    startRotation() {
      this.timer = setInterval(this.nextSlide, 3000);
    },
    stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
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