/**
 * Problem 4
 * Write a function that given a list of non negative integers,
 * arranges them such that they form the largest possible number.
 * For example, given [50, 2, 1, 9], the largest formed number is 95021.
 * @module lib/numArranger
 */


'use strict';

var RADIX = 10;

var descendingStringLexicalComparator = function(lhs, rhs) {
  var lhsStr = lhs.toString(RADIX);
  var rhsStr = rhs.toString(RADIX);
  return (lhsStr + rhsStr).localeCompare(rhsStr + lhsStr) * -1;
};

module.exports = {

  // Got stuck on this, here's JS version from Java here https://blog.svpino.com/2015/05/08/solution-to-problem-4
  arrange: function(positiveNums) {
    var inputClone = positiveNums.slice(0);
    inputClone.sort(descendingStringLexicalComparator);
    return parseInt(inputClone.join(''), RADIX);
  }

};
