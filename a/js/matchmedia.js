/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
window.matchMedia = window.matchMedia || (function(e, f) {
    var c,
        a = e.documentElement,
        b = a.firstElementChild || a.firstChild,
        d = e.createElement("body"),
        g = e.createElement("div");
    g.id = "mq-test-1";
    g.style.cssText = "position:absolute;top:-100em";
    d.appendChild(g);
    return function(h) {
        g.innerHTML = '&shy;<style media="' + h + '"> #mq-test-1 { width: 42px; }</style>';
        a.insertBefore(d, b);
        c = g.offsetWidth == 42;
        a.removeChild(d);
        return {
            matches: c,
            media: h
        }
    }
})(document);
