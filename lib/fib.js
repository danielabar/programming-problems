/**
 * Problem 3
 * Write a function that computes the list of the first 70 Fibonacci numbers.
 * By definition, the first two numbers in the Fibonacci sequence are 0 and 1,
 * and each subsequent number is the sum of the previous two.
 * As an example, here are the first 10 Fibonnaci numbers:
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
 * @module lib/fib
 */


'use strict';

module.exports = {

  compute: function(num) {
    var result = [];

    if (num === 1) {
      result.push(0);
    } else if (num === 2) {
      result.push(0);
      result.push(1);
    } else if (num > 2 && num <= 70) {
      result.push(0);
      result.push(1);
      for (var i=2; i<num; i++) {
        result.push(result[i-1] + result[i-2]);
      }
    } else {
      throw new Error('Unable to compute fibonnaci sequence for: ' + num);
    }

    return result;
  }

};
