/**
 * Problem 2
 * Write a function that combines two lists by alternatingly taking elements.
 * For example: given the two lists [a, b, c] and [1, 2, 3],
 * the function should return [a, 1, b, 2, c, 3].
 * @module lib/listCombinator
 */


'use strict';

module.exports = {

  // Assuming listA and listB are equal lengths
  combineAlternate: function(listA, listB) {
    var result = [];
    for (var i=0; i<listA.length; i++) {
      result.push(listA[i]);
      result.push(listB[i]);
    }
    return result;
  }

};
