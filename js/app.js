import quotes from './quotes.js';

function $(el) {
    return document.querySelector(el);
}

function resize() {
    // Set element size explicitly for textFit to calculate everything
    $('.quote').style.width = window.screen.availWidth * 0.75 + "px";
    $('.quote').style.height = window.screen.availHeight * 0.75 + "px";
    
    // Call textFit to resize text
    textFit(document.getElementsByClassName('quote')[0], {alignHoriz: true, alignVert: true, multiLine: true, minFontSize: 13, maxFontSize: 60});

    // Clear attribute to fix alignment
    $('.quote').style.position = '';
}

window.addEventListener('load', function() {
    // Get random quote
    var quote = quotes[Math.floor(Math.random() * quotes.length)];

    // Set quote text (plus author)
    $('.quote').innerHTML = quote.q + '<br/>- ' + quote.a;

    // Resize text
    resize();
});

window.addEventListener('resize', resize);
