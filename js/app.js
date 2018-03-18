var quotes = require('./quotes.js');

function $(el) {
    return document.getElementsByClassName(el)[0];
}

function getFontSize(el) {
    return parseFloat(el.style.fontSize.slice(0,-2)) || 0;
}

function atLeast(val, min) {
    return val >= min ? val : min;
}

function hasUnderScroll() {
    return Math.max($('container').scrollHeight, document.documentElement.scrollHeight) < window.innerHeight - 60;
}

function hasOverScroll() {
    return Math.max($('container').scrollHeight, document.documentElement.scrollHeight) > window.innerHeight - 60;
}

function resize() {
    var newSize;
    function logThings() {
        console.group();
        console.log('quote size: ' + getFontSize($('quote')));
        console.log('scroll height: ' + $('container').scrollHeight);
        console.log('inner height: ' + window.innerHeight);
        console.groupEnd();
    }
    console.group();
    console.log('before increasing');
    logThings();
    while (!hasOverScroll() || getFontSize($('quote')) < 5) {
        newSize = getFontSize($('quote')) + 1;
        $('quote').style.fontSize = newSize + 'vw';
        $('author').style.fontSize = (newSize - 1) + 'vw';
        logThings();
    }
    console.groupEnd();
    console.group();
    console.log('before decreasing');
    logThings();
    while (hasOverScroll() && getFontSize($('quote')) >= 2) {
        newSize = getFontSize($('quote')) - 0.4;
        $('quote').style.fontSize = newSize + 'vw';
        $('author').style.fontSize = atLeast(newSize - 1, 1.2) + 'vw';
        logThings();
    }
    console.groupEnd();
}

window.addEventListener('load', function() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    //quote = {q: 'Most people feel cozy enough in samsara. They do not really have the genuine aspiration to go beyond samsara; they just want samsara to be a little bit better. It is quite interesting that “samsara” became the name of a perfume. And it is like that. It seduces us into thinking that it is okay: samsara is not so bad; it smells nice! The underlying motivation to go beyond samsara is very rare, even for people who go to Dharma centers. There are many people who learn to meditate and so forth, but with the underlying motive that they hope to make themselves feel better. And if it ends up making them feel worse, instead of realizing that this may be a good sign, they think there is something wrong with Dharma. We are always looking to make ourselves comfortable in the prison house. We might think that if we get the cell wall painted a pretty shade of pale green, and put in a few pictures, it won’t be a prison any more.', a: 'Chatral Rinpoche'};
    $('quote').innerHTML = quote.q;
    $('author').innerHTML = "- " + quote.a;
    resize();
});

window.addEventListener('resize', resize);
