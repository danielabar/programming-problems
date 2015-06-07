'use strict';

var scrape = require('./util/scrape');

// Usage: node index | pbcopy
scrape.scrapeFib(function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log(scrape.formatFib(result));
  }
});
