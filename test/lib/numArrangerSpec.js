'use strict';

var numArranger = require('../../lib/numArranger');
var expect = require('chai').expect;

describe('numArranger', function() {

  it('Largest arrangement of [50, 2, 1, 9] is 95021', function() {
    expect(numArranger.arrange([50, 2, 1, 9])).to.equal(95021);
  });

  it('Largest arrangement of [5, 50, 56] is 56550', function() {
    expect(numArranger.arrange([5, 50, 56])).to.equal(56550);
  });

  it('Largest arrangement of [420, 42, 423] is 42423420', function() {
    expect(numArranger.arrange([420, 42, 423])).to.equal(42423420);
  });

});
