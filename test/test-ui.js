var assert = require('assert');
var quotes = require('../js/quotes.js');
var puppeteer = require('puppeteer');

describe('margins', function() {
    it('avoid overflow', function() {
        // for each quote in the list
        // render page
        // check width and height are not overflowing
        for (quote in quotes) {
        }
        //(async () => {
          //const browser = await puppeteer.launch();
          //const page = await browser.newPage();
          //await page.goto('../index.html', {waitUntil: 'networkidle2'});
//
          //await browser.close();
        //})();
        return true;
    })
});
