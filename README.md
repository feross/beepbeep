# beepbeep [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/feross/beepbeep/master.svg
[travis-url]: https://travis-ci.org/feross/beepbeep
[npm-image]: https://img.shields.io/npm/v/beepbeep.svg
[npm-url]: https://npmjs.org/package/beepbeep
[downloads-image]: https://img.shields.io/npm/dm/beepbeep.svg
[downloads-url]: https://npmjs.org/package/beepbeep
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

Make a console beep sound. *Well-tested, web-scale, cloud-based, restful node.js module.*

## Usage

```javascript
var beep = require('beepbeep')

beep()
// Beep!

beep(2)
// Beep! Beep!

beep(3, 1000)
// Beep! ... Beep! ... Beep!

beep([1000, 500, 2000])
// 1 second delay...Beep! 0.5 second delay...Beep! 2 second delay...Beep!
```

## Installation

```
npm install beepbeep
```

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).
