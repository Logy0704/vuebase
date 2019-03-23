
Vue.filter('readMore', function (text, length, suffix) {
  return text.substring(0, length) + suffix
})
var app = new Vue({
  el: '#app',
  data: {
    text: '    Lorem ipsu variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets.It was introduced to the Information Age in the mid - 1980s by Aldus Corporation, which employed it in graphics and word - processing templates for its desktop publishing program PageMaker.Many popular Word Processors use this format as a placeholder.Some examples are Pages or Microsoft Word.'
  }
  // filters: {
  //   numberFormat: function (value) {
  //     return value.toLocaleString()
  //   }
  // }

})