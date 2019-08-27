(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var start = function start() {
	var pan = arguments.length <= 0 || arguments[0] === undefined ? { y: "-=190" } : arguments[0];
	var cobalt = arguments.length <= 1 || arguments[1] === undefined ? { scale: .4 } : arguments[1];

	TweenLite.defaultEase = Power2.easeInOut;
	var tl = new TimelineMax();
	tl.set('.frame1', { opacity: 1 });

	var t1_time = "+=.22";
	tl.from('.t1a', .01, { opacity: 0 }, .4);
	tl.from('.t1b', .01, { opacity: 0 }, t1_time);
	tl.from('.t1c', .01, { opacity: 0 }, t1_time);
	tl.from('.t1d', .01, { opacity: 0 }, t1_time);
	tl.from('.t1e', .01, { opacity: 0 }, t1_time);

	// tl.add("watch", "+=.3")
	// tl.from('.watch', .5, {y:"+=50"}, 'cta')

	tl.set('.frame2', { opacity: 1 });
	tl.to([".frame1", ".frame2"], .6, _extends({}, pan, { ease: Power1.easeInOut }), "+=1.8");

	var tlF2 = new TimelineMax();

	tlF2.from('.cobalt', 3, _extends({}, cobalt, { ease: Power1.easeOut }), 0);
	tl.add("framer2");

	tlF2.add(endFrame(), .5);

	tl.add(tlF2);

	// tl.gotoAndPlay("framer2")
};

var endFrame = function endFrame() {
	var tlEnd = new TimelineMax();
	var time = .01;

	tlEnd.from('.t2a', time, { opacity: 0, ease: Power2.easeInOut }, 0);
	tlEnd.from('.t2b', time, { opacity: 0, ease: Power2.easeInOut }, .3);
	// tlEnd.from('.t2c', time, {opacity:0, ease:Power2.easeInOut}, .6)

	var list = ["power_p", "power_o", "power_w", "power_e", "power_r"];

	var tlLetter = new TimelineMax();

	list.map(function (item) {

		var letter = colorChanger(item);
		tlLetter.add(letter, '-=.3');
	});

	var tlLiner = new TimelineMax();
	tlLiner.from('.power_line', .2, { opacity: 0 });
	tlLiner.to('.power_line', .6, { width: 180, x: "+=220" }, '-=.2');
	tlLiner.to('.power_line', .2, { opacity: 0 }, "-=.2");

	tlEnd.add(tlLetter, .3);
	tlEnd.add(tlLiner, .3);

	return tlEnd;
};

var colorChanger = function colorChanger(id) {
	var power = new TimelineMax();
	var color_from = 'rgba(102, 204, 0, 0)';
	var color_to = 'rgba(102, 204, 0, 1)';

	var white_from = 'rgba(255, 255, 255, 0)';
	var white_to = 'rgba(255, 255, 255, 1)';

	power.fromTo("#" + id, .1, { fill: color_from }, { fill: color_to }, 0);
	power.to("#" + id, .3, { fill: white_to }, "+=0");
	return power;
};

exports.size = size;
exports.start = start;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

TweenLite.from('.hero', 2, { y: 0, ease: Power2.easeOut });

(0, _commonJsCommonJs.start)({ y: "-=90" }, { scale: .42 });

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
