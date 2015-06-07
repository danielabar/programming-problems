'use strict';

var request = require('request');
var cheerio = require('cheerio');

module.exports = {

  scrapeFib: function(cb) {
    var result = [];
    var url = 'http://www.miniwebtool.com/list-of-fibonacci-numbers/?number=100';
    request(url, function(err, response, html) {
      if (err) {
        cb(err);
      } else {
        var $ = cheerio.load(html);
        var dataRows = $('table.dt').find('tr');
        for (var i=1; i<dataRows.length; i++) {
          var dataRow = $(dataRows[i]);
          var value = dataRow.find('td:nth-child(2)');
          result.push(value.html());
        }
        // cb(null, result.join(', '));
        cb(null, result);
      }
    });
  },

  formatFib: function(fibs) {
    var fibHash = {};
    for (var i=0; i<fibs.length; i++) {
      fibHash[i] = fibs[i];
    }
    return fibHash;
  }

};
