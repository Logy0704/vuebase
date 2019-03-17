var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js'
  },
  methods: {
    onclick: function () {
      // alert('onclick')
      this.now = Date().toLocaleString();
    }
  }
}
)