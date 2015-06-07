'use strict';

var listCombinator = require('../../lib/listCombinator');
var expect = require('chai').expect;

describe('listCombinator', function() {

  var listA = ['a', 'b', 'c'];
  var listB = [1, 2, 3];
  var expectedResult = ['a', 1, 'b', 2, 'c', 3];

  it('Combines lists with alternating elements', function() {
    expect(listCombinator.combineAlternate(listA, listB)).to.eql(expectedResult);
  });

});
