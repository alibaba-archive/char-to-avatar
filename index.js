// **Github:** https://github.com/teambition/char-to-avatar
//
// **License:** MIT

'use strict'

var Canvas = require('canvas')

module.exports = CharToAvatar
CharToAvatar.font = '120px \'Microsoft Yahei\''
CharToAvatar.textAlign = 'center'
CharToAvatar.textBaseline = 'middle'

function CharToAvatar (character, shape, charColor, backgroundColor, size) {
  size = size > 0 ? +size : 200
  this.canvas = new Canvas(size, size)
  var ctx = this.canvas.getContext('2d')
  ctx.fillStyle = backgroundColor

  var radius = size / 2
  switch (shape) {
    case 'circle':
      ctx.beginPath()
      ctx.arc(radius, radius, radius, 0, 2 * Math.PI, true)
      ctx.fill()
      break
    default:
      ctx.fillRect(0, 0, size, size)
  }

  ctx.fillStyle = charColor
  ctx.font = CharToAvatar.font
  ctx.textAlign = CharToAvatar.textAlign
  ctx.textBaseline = CharToAvatar.textBaseline
  ctx.textDrawingMode = 'glyph'
  ctx.patternQuality = 'nearest'

  var fix = radius * 0.9
  ctx.fillText(character, fix, fix, fix * 2)
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
