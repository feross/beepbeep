#!/usr/bin/env node
'use strict'

var beep = require('../')

try {
  var args = process.argv.splice(2).map(_ => parseInt(_))
  switch (args.length) {
    case 0:
      beep()
      break
    case 1:
      beep(args[0])
      break
    case 2:
      beep(args[0], args[1])
      break
    default:
      beep(args)
      break
  }
} catch (error) {
  console.log('Wrong parameters', error)
  process.exit(-1)
}
