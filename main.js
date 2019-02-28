var state = { count: 0 };
var app = new Vue({
  el: '#app',
  data: {
    message: {
      value: 'Hello, vuejs!',
      scroll: 0
    }
  },
  methods: {
    increment: function() {
      this.count += 1;
    }
  }
});
