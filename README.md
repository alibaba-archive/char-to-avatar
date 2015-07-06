char-to-avatar
====
Convert a character to avatar image in NodeJS.

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

## Dependencies

- Cairo: http://cairographics.org/ (libpng giflib freetype libpixman cairo)

## Demo

## Installation

```bash
npm install char-to-avatar
```

## API

```js
var CharToAvatar = require('char-to-avatar')
```

### new CharToAvatar(character[, options])

- `character`: {String}, a character to render.
- `options.color`: {String}, character color, default to `'#ffffff'`.
- `options.backgroundColor`: {String}, background color, default to `'#383838'`.
- `options.shape`: {String}, `'square'` or `'circle'`,avatar shape, default to `'square'`.
- `options.size`: {Number}, avatar size, default to `100`.

### CharToAvatar.prototype.pngStream()

Return a png image stream.

### CharToAvatar.prototype.jpegStream([quality])

Return a jpeg stream.

- `quality`: {Number}, `0 - 100`, jpeg quality, default is `85`.

### CharToAvatar.prototype.toBuffer()

Return a thunk function that guarantee a png image buffer.

### CharToAvatar.prototype.toDataURL([mime])

Return a thunk function that guarantee a image data string.

- `mime`: {String}, mime type, default is `'image/png'`.

[npm-url]: https://npmjs.org/package/char-to-avatar
[npm-image]: http://img.shields.io/npm/v/char-to-avatar.svg

[travis-url]: https://travis-ci.org/teambition/char-to-avatar
[travis-image]: http://img.shields.io/travis/teambition/char-to-avatar.svg
