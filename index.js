'use strict';

var scrape = require('./util/scrape');

scrape.scrapeFib(function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(scrape.formatFib(result)));
  }
});
