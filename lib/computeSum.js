/**
 * Problem 1
 * Write three functions that compute the sum of the numbers in a given list
 * using a for-loop, a while-loop, and recursion.
 * @module lib/computeSum
 */


'use strict';

module.exports = {

  forLoop: function(items) {
    var result = 0;
    for (var i=0; i<items.length; i++) {
      result += items[i];
    }
    return result;
  },

  whileLoop: function(items) {
    var result = 0;
    var loopIndex = 0;
    while (loopIndex < items.length) {
      result += items[loopIndex];
      loopIndex += 1;
    }
    return result;
  },

  recursion: function(items) {
    if (items.length === 1) {
      return items[0];
    } else {
      return items[0] + this.recursion(items.slice(1));
    }
  }

};
