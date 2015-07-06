// **Github:** https://github.com/teambition/char-to-avatar
//
// **License:** MIT

'use strict'

var Canvas = require('canvas')

module.exports = CharToAvatar
CharToAvatar.font = '60px \'Microsoft Yahei\''
CharToAvatar.textAlign = 'center'
CharToAvatar.textBaseline = 'middle'

function CharToAvatar (character, options) {
  options = options || {}
  var size = options.size > 0 ? +options.size : 100

  this.canvas = new Canvas(size, size)
  var ctx = this.canvas.getContext('2d')
  ctx.fillStyle = options.backgroundColor || '#383838'

  var radius = size / 2
  switch (options.shape) {
    case 'circle':
      ctx.beginPath()
      ctx.arc(radius, radius, radius, 0, Math.PI * 2, true)
      ctx.fill()
      break
    default:
      ctx.fillRect(0, 0, size, size)
  }

  ctx.fillStyle = options.color || '#fff'
  ctx.font = CharToAvatar.font
  ctx.textAlign = CharToAvatar.textAlign
  ctx.textBaseline = CharToAvatar.textBaseline
  ctx.textDrawingMode = 'glyph'
  ctx.patternQuality = 'nearest'
  ctx.fillText(character, radius, radius, radius)
}

CharToAvatar.prototype.pngStream = function () {
  return this.canvas.pngStream()
}

CharToAvatar.prototype.jpegStream = function (quality) {
  return this.canvas.pngStream({quality: quality > 0 ? +quality : 85})
}

CharToAvatar.prototype.toBuffer = function () {
  var canvas = this.canvas
  return function (callback) {
    return canvas.toBuffer(callback)
  }
}

CharToAvatar.prototype.toDataURL = function (mime) {
  var canvas = this.canvas
  return function (callback) {
    return canvas.toDataURL(mime || 'image/png', callback)
  }
}
