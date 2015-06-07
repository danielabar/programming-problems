'use strict';

var computeSum = require('../../lib/computeSum');
var expect = require('chai').expect;

describe('sum', function() {

  var input = [16, 23, 567];
  var expectedSum = 606;

  it('Computes sum using for loop', function() {
    expect(computeSum.forLoop(input)).to.equal(expectedSum);
  });

  it('Computes sum using while loop', function() {
    expect(computeSum.whileLoop(input)).to.equal(expectedSum);
  });

  it('Computes sum using recursion', function() {
    expect(computeSum.recursion(input)).to.equal(expectedSum);
  });

});
