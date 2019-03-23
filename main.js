
Vue.filter('readMore', function (text, length, suffix) {
  return text.substring(0, length) + suffix
})
var app = new Vue({
  el: '#app',
  computed: {
    computedNumber: function () {
      return Math.random()
    }
  },
  methods: {
    methodsNumber: function () {
      return Math.random()
    }
  }
})