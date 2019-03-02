var state = { count: 0 };
var app = new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, name: 'aa', hp: 100 },
      { id: 2, name: 'ab', hp: 200 },
      { id: 3, name: 'bb', hp: 301 }
    ]
  },
  methods: {
    doAdd: function() {
      var max = this.list.reduce(function(a, b) {
        return a > b.id ? a : b.id;
      }, 0);

      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      });
    }
  }
});
