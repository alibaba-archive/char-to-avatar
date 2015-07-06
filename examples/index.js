// **Github:** https://github.com/teambition/char-to-avatar
//
// **License:** MIT

'use strict'

var toa = require('toa')
var CharToAvatar = require('../index')

var app = toa(function *() {
  if (this.path === '/favicon.ico') this.body = null
  else {
    var character = decodeURIComponent(this.path).slice(1, 2) || 't'
    var avatar = new CharToAvatar(character, {
      shape: 'circle',
      backgroundColor: 'rgba(255, 0, 0, 0.8)'
    })
    var dataURL = yield avatar.toDataURL()
    console.log(dataURL.length)
    this.type = 'html'
    this.body = `<img src="${dataURL}" />`
  }
})

app.listen(3000)
