'use strict';

var numArranger = require('../../lib/numArranger');
var expect = require('chai').expect;

describe('numArranger', function() {

  it('Example 1', function() {
    expect(numArranger.arrange([50, 2, 1, 9])).to.equal(95021);
  });

  it('Example 2', function() {
    expect(numArranger.arrange([5, 50, 56])).to.equal(56550);
  });

  it('Example 3', function() {
    expect(numArranger.arrange([420, 42, 423])).to.equal(42423420);
  });

});
