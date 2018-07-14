var app = new Vue({
  el: '#app',
  data: {
    currentNumber: 0,
    timer: null
  },
  mounted: function () {
    this.startRotation();
    this.activeButton();
  },
  methods: {
    activeButton () {
      let buttons = document.querySelectorAll('.carousel--btn');
      let number = Math.abs(this.currentNumber) % slides.length;
      buttons[number].className = 'carousel--btn carousel--btn-active';

      for (let i = 0; i < buttons.length; i++) {
        if (i !== number) {
          buttons[i].className = 'carousel--btn';
        }
      }
    },
    startRotation() {
      this.timer = setInterval(this.nextSlide, 3000);
    },
    stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    nextSlide () {
      this.currentNumber += 1;
      this.activeButton();
    },
    switchSlide (number) {
      this.currentNumber = number;
      this.activeButton();
    }
  },
  computed: {
    currentSlide: function() {
      return slides[Math.abs(this.currentNumber) % slides.length];
    }
  }
});
