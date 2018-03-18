var assert = require('assert');
var utils = require('./utils.js');
var quotes = require('../js/quotes.js');

describe('quotes', function() {
    it('avoid duplicates', function() {
        return assert.equal(utils.hasDuplicates('q', quotes), false);
    })
});
