(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var start = function start() {
	TweenLite.defaultEase = Power2.easeInOut;
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	var tlHero = new TimelineMax({ repeat: 0, yoyo: true });
	// tl.from('.hero', .7, {:-90, ease:Power1.easeInOut})
	tlHero.from('.hero', 1, { x: 0, y: -159, scale: .7, ease: Power2.easeOut });

	tl.add(tlHero);
	tl.from('.t1', .3, { opacity: 0 }, '+=.3');
	tl.add("cta", "+=.3");
	tl.from('.watch', .5, { y: "+=50" }, 'cta');
	tl.from('.green', .5, { y: "+=50" }, 'cta+=.1');
};

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
