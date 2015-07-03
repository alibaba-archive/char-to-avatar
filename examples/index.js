// **Github:** https://github.com/teambition/char-to-avatar
//
// **License:** MIT

'use strict'

var toa = require('toa')
var CharToAvatar = require('../index')

var app = toa(function *() {
  if (this.path === '/favicon.ico') this.body = null
  else {
    var character = this.path.slice(1, 2) || 'T'
    console.log(this.path, character)
    var avatar = new CharToAvatar(character, 'circle', '#fff', 'rgba(255, 0, 0, 0.8)')
    var dataURL = yield avatar.toDataURL()
    this.type = 'html'
    this.body = `<img src="${dataURL}" />`
  }
})

app.listen(3000)
