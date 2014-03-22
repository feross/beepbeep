'use strict';

/**
 * Make multiple console beep sounds
 * @param {number} [i=1] - Number of beeps
 * @param {number} [t=500] - Milliseconds between beeps
 */
module.exports = function (i, t) {
  if (isNaN(i)) i = 1
  if (isNaN(t)) t = 500

  while (i-- > 0) setTimeout(beepNow, t*i)
}

function beepNow() { process.stdout.write('\x07') }
