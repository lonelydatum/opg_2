(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

banner.addEventListener("mouseenter", function () {
	var tl = new TimelineMax();
	tl.set(".line", { opacity: 1 });
	tl.fromTo(".line", .3, { scaleX: 0 }, { scaleX: 1 });
});

banner.addEventListener("mouseleave", function () {
	var tl = new TimelineMax();
	tl.set(".line", { opacity: 1 });
	tl.fromTo(".line", .3, { scaleX: 1 }, { scaleX: 0 });
});

exports.size = size;

},{}],2:[function(require,module,exports){
'use strict';

require('../../_common/js/common.js');

var start = function start() {
	TweenLite.defaultEase = Power2.easeInOut;
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	var tlHero = new TimelineMax({ repeat: 0, yoyo: true });
	// tl.from('.hero', .7, {:-90, ease:Power1.easeInOut})
	tlHero.from('.hero', 1, { x: 0, y: -159, scale: .7, ease: Power2.easeOut });

	tl.add(tlHero);
	tl.from('.t1a', .3, { opacity: 0 });
	tl.from('.t1b', .3, { opacity: 0 });
	tl.from('.t1c', .3, { opacity: 0 });
	tl.from('.t1d', .3, { opacity: 0 });
	tl.from('.t1e', .3, { opacity: 0 });

	// tl.add("watch", "+=.3")
	// tl.from('.watch', .5, {y:"+=50"}, 'cta')

	tl.to([".frame1", ".frame2"], .6, { y: "-=190", ease: Power1.easeInOut }, "+=2");
	tl.add(endFrame(), "+=.1");
};

var endFrame = function endFrame() {
	var tlEnd = new TimelineMax();
	var time = .4;
	tlEnd.from('.t2a img', time, { y: "-100%", ease: Power2.easeInOut }, 0);
	tlEnd.from('.t2b img', time, { x: "-100%", ease: Power2.easeInOut }, .1);
	tlEnd.from('.t2c img', time, { y: "100%", ease: Power2.easeInOut }, .2);

	return tlEnd;
};

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
