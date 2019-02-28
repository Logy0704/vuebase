var state = { count: 0 };
var app = new Vue({
  el: '#app',
  data: {
    message: {
      value: 'Hello, vuejs!',
      scroll: 0
    }
  },
  mounted: function() {
    this.scroll = 100;
  }
});
state.count++;
