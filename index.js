'use strict';

/**
 * Make multiple console beep sounds
 * @param {number} [i=1] - Number of beeps
 * @param {number} [t=500] - Milliseconds between beeps
 */
module.exports = function (i, t) {
  if(i instanceof Array) {
    delayedBeeps(i);
    return;
  }

  i = validate(i, 1);
  t = validate(t, 500);

  while (i-- > 0) {
    if (t*i === 0) beepNow()
    else setTimeout(beepNow, t*i)
  }
}

function delayedBeeps(i) {
  if(i.length === 0) return;

  setTimeout(function() {
    beepNow();
    i.splice(0, 1);
    delayedBeeps(i);
  }, validate(i[0], 1000));
};

function validate(n, preset) {
  return isNaN(n) ? preset : n;
}

function beepNow() { process.stdout.write('\x07') }